import PropTypes from "prop-types"

/**
 * Composant représentant un tooltip personnalisé pour les graphiques.
 * 
 * @component
 * @param {Object} props - Les propriétés du composant
 * @param {boolean} props.active - Indique si le tooltip est actif
 * @param {Array<Object>} props.payload - Données du tooltip
 * @returns {JSX.Element|null} - Élément JSX du tooltip ou null s'il n'est pas actif ou s'il n'y a pas de données
 */
const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p>{`${payload[0].value}kg`}</p>
                <p>{`${payload[1].value}kCal`}</p>
            </div>
        );
    }

    return null;
};

// PropTypes
CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            payload: PropTypes.shape({
                day: PropTypes.string,
                kilogram: PropTypes.number,
                calories: PropTypes.number,
                index: PropTypes.number,
            })
        })
    )
}

export default CustomTooltip