import PropTypes from "prop-types"
import styled from "styled-components";

// Styled-components
const StyledIconType = styled.div`
width: 10px;
height: 10px;
background-color: ${props => props.color};
margin-right: 10px;
border-radius: 50%;
`

/**
 * Composant représentant une légende personnalisée pour les graphiques.
 * 
 * @component
 * @param {Object} props - Les propriétés du composant
 * @param {Array<Object>} props.payload - Données de la légende
 * @returns {JSX.Element} - Élément JSX de la légende
 */
const RenderLegend = ({ payload }) => {
    return (
        <div className='bar-legend'>
            <div className="bar-legend_title">
                <span>Activité quotidienne</span>
            </div>
            <div className="bar-legend_legend">
                {payload.map((entry, index) => (
                    <div className='bar-legend_item' key={`item-${index}`}>
                        <StyledIconType color={entry.color} />
                        <span>{entry.value === "kilogram" ? "Poids (kg)" : "Calories brûlées (kCal)"}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

// PropTypes
RenderLegend.propTypes = {
    payload: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            type: PropTypes.oneOf(['line', 'square', 'rect', 'circle', 'cross', 'diamond', 'star', 'triangle']),
            id: PropTypes.any,
            color: PropTypes.string,
        })
    )
}

export default RenderLegend
