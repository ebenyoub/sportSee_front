import PropTypes from "prop-types";
import useFetch from "../../../utils/useFetch";
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from "recharts";
import Error from "../../../pages/Error";
import { memo } from "react";
import { BASEURL } from "../../../utils/Constants";
import styled from "styled-components"

// Styled-components
const RadarContainer = styled.div`
    background-color: #282D30;
    border-radius: 10px;
`

/**
 * Composant RadarGraph pour afficher un graphique radar des performances utilisateur.
 * @param {Object} props - Les props du composant.
 * @param {string} props.id - L'identifiant de l'utilisateur pour récupérer les données de performance.
 * @returns {JSX.Element} Composant RadarGraph.
 */
const RadarGraph = memo(({ id }) => {
    const url = BASEURL + `user/${id}/performance`;
    const { data: performances, loading, error } = useFetch(url, "performance", id);

    if (error) {
        return <Error message={error.message} />;
    }

    if (loading) {
        return <span className='loading'>Loading...</span>
    }

    const { data } = performances.data;

    const kind = {
        1: "Cardio",
        2: "Énergie",
        3: "Endurance",
        4: "Force",
        5: "Vitesse",
        6: "Intensité"
    };

    const radarData = data && data.map((item) => {
        return {
            kind: kind[item.kind],
            value: item.value
        };
    }).reverse(); // inverser l'ordre des données

    return (
        <RadarContainer>
            <ResponsiveContainer width="100%" height="100%" >
                <RadarChart data={radarData} margin={{ top: 60, right: 60, bottom: 60, left: 60 }} >
                    <PolarGrid radialLines={false} stroke="#FFFFFF" />
                    <PolarAngleAxis
                        dataKey="kind"
                        tickLine={false}
                        tickSize={28}
                        tick={{
                            fontSize: "12px",
                            fontWeight: 500,
                            fill: "#FFFFFF"
                        }}
                    />
                    <PolarRadiusAxis tick={false} tickLine={false} axisLine={false} />
                    <Radar name="Performance" dataKey="value" stroke="transparent" fill="#FF0101B2" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </RadarContainer>
    );
});

RadarGraph.displayName = "RadarGraph";

RadarGraph.propTypes = {
    id: PropTypes.string.isRequired,
};

export default RadarGraph;
