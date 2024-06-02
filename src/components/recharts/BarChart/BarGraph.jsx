import { memo, useEffect, useRef, useState } from 'react';
import PropTypes from "prop-types"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import useFetch from '../../../utils/useFetch';
import RenderLegend from './RenderLegend';
import CustomTooltip from './CustomTooltip';
import { BASEURL } from '../../../utils/Constants';
import { Navigate } from 'react-router-dom';

/**
 * Composant représentant un graphique en barres pour l'activité.
 * 
 * @component
 * @param {Object} props - Les propriétés du composant
 * @param {string} props.id - L'identifiant de l'utilisateur
 * @returns {JSX.Element}
 */
const BarGraph = memo(({ id }) => {
    const [containerWidth, setContainerWidth] = useState(window.innerWidth);
    const url = BASEURL + `user/${id}/activity`
    const container = useRef(null)

    const { data, loading, error } = useFetch(url, "activity", id);

    useEffect(() => {
        const handleResize = () => {
            setContainerWidth(container.current.clientWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    if (error) {
        return <Navigate to="/error" state={{ message: error.message }} />;
    }

    if (loading) {
        return <span className='loading'>Loading...</span>
    }

    return (
        <ResponsiveContainer width="100%" height="100%" ref={container}>
            <BarChart data={data.sessions.map((session, index) => ({ ...session, index: index + 1 }))}
                barSize={7}
                barGap={7}
            >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="index" tickLine={false} axisLine={false} />
                <YAxis yAxisId="kilogram" domain={['dataMin-2', 'dataMax+1']} dataKey="kilogram" orientation='right' tickLine={false} axisLine={false} tickCount={3} />
                <YAxis yAxisId="calories" hide={true} />
                <Tooltip content={CustomTooltip} position={{ y: 50 }} offset={54 * containerWidth / 830} />
                <Legend
                    verticalAlign="top"
                    align="right"
                    height={90}
                    content={RenderLegend}
                />
                <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" radius={[3, 3, 0, 0]} width={7} />
                <Bar yAxisId="calories" dataKey="calories" fill="#E60000" radius={[3, 3, 0, 0]} width={7} />
            </BarChart>
        </ResponsiveContainer>
    );
})

BarGraph.displayName = "BarChart";

// PropTypes
BarGraph.propTypes = {
    id: PropTypes.string.isRequired,
};

export default BarGraph;
