import { memo, useEffect, useRef, useState } from 'react'
import PropTypes from "prop-types";
import { Pie, PieChart, ResponsiveContainer, Cell } from 'recharts';
import styled from "styled-components"

// Styled-components
const PieWrapper = styled.div`
    position: relative;
    display: flex;
    height: 100%;
    weight: 100%;
    background-color: #FBFBFB;
    border-radius: 10px;
`

const PieLabel = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5em;
    flex-direction: column;
    inset: 0;
    top: 0;

    & h1 {
        margin: 0;
    }

    & span {
        color: #74798C;
        font-weight: 500;
    }
`

const PieTitle = styled.h2`
    position: absolute;
    top: 1.5rem;
    left: 1.5rem;
    font-size: 15px;
    font-weight: 500;
`

/**
 * Composant graphique représentant un diagramme circulaire.
 * Affiche un pourcentage et une étiquette pour représenter une valeur.
 * Utilise Recharts pour le graphique et styled-components pour la stylisation.
 * 
 * @component
 * @param {object} props - Les propriétés du composant
 * @param {number} props.score - Le score à afficher sous forme de pourcentage (entre 0 et 1)
 * @returns {JSX.Element} Composant JSX représentant le diagramme circulaire
 */
const PieGraph = memo(({ score }) => {
    const pieRef = useRef(null)
    const [containerSize, setContainerSize] = useState(null)

    const data = [
        { name: 'Score', value: score, color: "#FF0000" },
        { name: 'Restant', value: 1 - score, color: "transparent" }
    ];

    useEffect(() => {
        const handleResize = () => {
            if (pieRef.current) {
                const { offsetWidth } = pieRef.current;
                setContainerSize(offsetWidth * 0.1);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [containerSize]);

    return (
        <PieWrapper ref={pieRef}>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width="100%" height="100%">
                    <Pie
                        data={data}
                        dataKey="value"
                        innerRadius={75}
                        outerRadius={90}
                        startAngle={90}
                        endAngle={450}
                        cornerRadius={50}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                    <Pie
                        data={[{ value: 1 }]}
                        dataKey="value"
                        innerRadius={0}
                        outerRadius={75}
                        fill="#FFFFFF"
                        isAnimationActive={false}
                    />
                </PieChart>
                <PieLabel>
                    <h1>{(score * 100).toFixed(0) + '%'}</h1>
                    <span>de votre</span>
                    <span>objectif</span>
                </PieLabel>
                <PieTitle size={containerSize}>Score</PieTitle>
            </ResponsiveContainer>
        </PieWrapper>
    )
})

PieGraph.displayName = "PieGraph"

// PropTypes
PieGraph.propTypes = {
    score: PropTypes.number.isRequired
};

export default PieGraph;
