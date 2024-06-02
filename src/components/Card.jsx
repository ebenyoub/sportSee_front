import styled from "styled-components"
import PropTypes from "prop-types"
import { cloneElement, createElement, useEffect, useRef, useState } from "react";

// Styled-components
const CardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fbfbfbb6;
    border-radius: 10px;
    height: 126px;
    display: flex;
    padding: 0 2rem;
`

const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.$background};
    border-radius: 10px;
    aspect-ratio: 1;
    height: 50%;

    & svg {
        width: 40%;
        height: 40%;
    }
`

const DataCount = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin-left: 2rem;
    
    & span {
        color: #74798C;
        font-weight: 700;
        font-size: 24px;
    }
`

/**
 * Composant représentant une carte affichant des données avec une icône.
 * 
 * @component
 * @param {Object} props - Les propriétés du composant
 * @param {Object} props.card - Les données à afficher dans la carte
 * @param {string} props.card.name - Le nom de la donnée
 * @param {number} props.card.value - La valeur de la donnée
 * @param {React.ElementType} props.card.icon - L'icône à afficher
 * @param {string} props.card.unit - L'unité de mesure de la donnée
 * @returns {JSX.Element}
 */
const Card = ({ card }) => {
    const [color, setColor] = useState("")
    const iconRef = useRef(null)

    useEffect(() => {
        const iconColor = iconRef?.current?.getAttribute('fill')
        setColor(`${iconColor}1A`)
    }, [color])

    return (
        <CardContainer>
            <IconWrapper className="wrapperIcon" $background={color ? color : "#FBFBFB"} >
                {cloneElement(createElement(card.icon), { ref: iconRef })}
            </IconWrapper>
            <DataCount>
                <h2>{`${card.value.toLocaleString("en-EN", { useGrouping: true })}${card.unit}`}</h2>
                <span>{card.name}</span>
            </DataCount>
        </CardContainer>
    )
}

export default Card;

Card.propTypes = {
    card: PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
        icon: PropTypes.elementType.isRequired,
        unit: PropTypes.string.isRequired
    }).isRequired
};
