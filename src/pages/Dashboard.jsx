import { memo } from "react";
import BarGraph from "../components/recharts/BarChart/BarGraph";
import { useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";
import Error from "./Error";
import LineGraph from "../components/recharts/LineChart/LineGraph";
import RadarGraph from "../components/recharts/RadarChart/RadarGraph";
import Welcome from "../components/Welcome";
import PieGraph from "../components/recharts/PieChart/PieGraph";
import { BASEURL } from "../utils/Constants";
import Card from "../components/Card";
import { Apple, Energy, Chicken, Cheeseburger } from "../iconComponents/index";

import styled from 'styled-components';

// Styled-components

const GraphContainer = styled.div`
    display: grid;
    grid-template-areas: "rectangle rectangle rectangle card"
                         "square square square card";
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 5.5fr 4.5fr;
    height: 603px;
    width: 1113px;
    gap: 2rem;
`

const Rectangle = styled.div`
    grid-area: rectangle;
    background-color: #FBFBFB;
    border-radius: 10px;
`;

const Squares = styled.div`
    grid-area: square;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
`;

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: card;
    gap: 2rem;
`;

/**
 * Composant Dashboard affichant différentes visualisations et informations pour un utilisateur.
 * 
 * @component
 */
const Dashboard = memo(() => {

    const { id } = useParams();
    const url = BASEURL + `user/${id}`;

    const { data, loading, error } = useFetch(url, "user", id);

    if (error) {
        return <Error message={error.message} />;
    }

    if (loading) {
        return <span className="loading">Loading...</span>
    }

    const { score, todayScore, keyData } = data.data

    const cardData = [
        { name: "Calories", value: keyData.calorieCount, icon: Apple, unit: "kCal" },
        { name: "Protéines", value: keyData.proteinCount, icon: Chicken, unit: "g" },
        { name: "Glucides", value: keyData.carbohydrateCount, icon: Energy, unit: "g" },
        { name: "Lipides", value: keyData.lipidCount, icon: Cheeseburger, unit: "g" }
    ]

    return (
        <main>
            <Welcome user={data.data.userInfos.firstName} />
            <GraphContainer>
                <Rectangle>
                    <BarGraph id={id} />
                </Rectangle>
                <Squares>
                    <LineGraph id={id} />
                    <RadarGraph id={id} />
                    <PieGraph id={id} score={score ? score : todayScore} />
                </Squares>
                <CardContainer>
                    {cardData.map((card, index) => (
                        <Card key={index} card={card} />
                    ))}
                </CardContainer>
            </GraphContainer>
        </main>
    );
})

Dashboard.displayName = "Dashboard";

export default Dashboard;
