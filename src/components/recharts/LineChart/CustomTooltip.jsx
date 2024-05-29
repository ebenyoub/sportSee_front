import PropTypes from "prop-types"

/**
 * Composant représentant un tooltip personnalisé pour un graphique de ligne.
 * 
 * @component
 * @param {Object} props - Les propriétés du composant
 * @param {boolean} props.active - Indique si le tooltip est actif ou non
 * @param {Array<Object>} props.payload - Données du tooltip
 * @param {string|number} props.payload[].value - Valeur du tooltip
 * @param {Object} props.payload[].payload - Données associées au tooltip
 * @param {string|number} props.payload[].payload.day - Jour associé à la donnée du tooltip
 * @param {number} props.payload[].payload.kilogram - Poids associé à la donnée du tooltip
 * @param {number} props.payload[].payload.calories - Calories associées à la donnée du tooltip
 * @param {number} props.payload[].payload.index - Index associé à la donnée du tooltip
 * @returns {JSX.Element|null} - Élément JSX du tooltip ou null s'il n'est pas actif ou s'il n'y a pas de données
 */
const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip-linechart">
                <p>{`${payload[0].value}min`}</p>
            </div>
        );
    }

    return null;
};

CustomTooltip.displayName = 'CustomTooltip';

// PropTypes
CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            payload: PropTypes.shape({
                day: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
                kilogram: PropTypes.number,
                calories: PropTypes.number,
                index: PropTypes.number,
            })
        })
    )
}

export default CustomTooltip;
