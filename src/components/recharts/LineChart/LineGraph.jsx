import { useRef, memo, useState, useEffect } from 'react'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import useFetch from '../../../utils/useFetch'
import PropTypes from "prop-types"
import CustomTooltip from './CustomTooltip'
import RenderLegend from './RenderLegend'
import styled from 'styled-components'
import { BASEURL } from '../../../utils/Constants'
import { Navigate } from 'react-router-dom'

// Styled-components
const LineContainer = styled.div`
    position: relative;
    border-radius: 10px;
    background: ${props =>
        props.$activePoint
            ? `linear-gradient(to right, red ${props.$activePoint}px, rgba(192, 0, 0) ${props.$activePoint}px, rgba(192, 0, 0) 100%)`
            : "red"};
`;

const TickLabel = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    position: absolute;
    bottom: 10px;

    & span {
        font-size: ${props => props.size};
        color: white;
        line-height: 30px;
        opacity: 0.5;
    }
`

/**
 * Composant représentant un graphique de ligne pour les sessions moyennes.
 * 
 * @component
 * @param {Object} props - Les propriétés du composant
 * @param {string} props.id - L'identifiant de l'utilisateur
 * @returns {JSX.Element}
 */
const LineGraph = memo(({ id }) => {
    const url = BASEURL + `user/${id}/average-sessions`
    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
    const containerRef = useRef(null)
    const [lineActivePoint, setLineActivePoint] = useState(null);

    const { data, loading, error } = useFetch(url, "sessions", id);
    
    useEffect(() => {
        if (containerRef.current) {
            setLineActivePoint(containerRef.current.offsetWidth);
        }
    }, []);

    const handleActivePoint = (e) => {
        if (e && e.activeCoordinate) {
            setLineActivePoint(e.activeCoordinate.x)
        }
    };

    if (error) {
        return <Navigate to="/error" state={{ message: error.message }} />;
    }

    if (loading) {
        return <span className='loading'>Loading...</span>
    }

    return (
        <LineContainer
            className='lineWrapper'
            $activePoint={lineActivePoint}
            onMouseLeave={() => setLineActivePoint(null)}
        >
            <ResponsiveContainer className="line-chart" width={"100%"} height={"100%"} ref={containerRef}>
                {data.data.sessions ? (
                    <LineChart data={data.data.sessions}
                        fill="#FF0000"
                        margin={{ left: 0, right: 0 }}
                        onMouseMove={handleActivePoint}
                        isCrosshairActive={false}
                    >
                        <CartesianGrid vertical={false} horizontal={false} />
                        <XAxis
                            dataKey="daily"
                            tickLine={false}
                            axisLine={false}
                            hide
                        />
                        <YAxis hide domain={['dataMin - 30', 'dataMax + 30']} />
                        <Tooltip content={<CustomTooltip />} cursor={false} />
                        <Legend
                            verticalAlign="top"
                            align="right"
                            content={<RenderLegend container={containerRef} />}
                        />
                        <Line
                            type="natural"
                            dataKey="sessionLength"
                            strokeWidth={3}
                            stroke="url(#colorGradient)"
                            dot={false}
                        />
                        <defs>
                            <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
                            </linearGradient>
                        </defs>
                    </LineChart>
                ) : (
                    <span>Loading...</span>
                )}
            </ResponsiveContainer>
            {data.data.sessions && (
                <TickLabel className="TickLabel" size={12}>
                    {days.map((day, index) => (
                        <span key={index}>{day}</span>
                    ))}
                </TickLabel>
            )}
        </LineContainer>
    )
})

LineGraph.displayName = 'LineGraph';

// PropTypes
LineGraph.propTypes = {
    id: PropTypes.string.isRequired,
};

export default LineGraph
