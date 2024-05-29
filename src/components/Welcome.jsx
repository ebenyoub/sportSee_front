import PropTypes from "prop-types";
import styled from "styled-components"

// Styled-components
const UserContainer = styled.div`
    margin-bottom: 3rem;
    h1 {
        font-size: 48px;
        font-weight: 500;
        margin-top: 0;
        span {
            color: red;
        }
    }
`

/**
 * Composant affichant un message de bienvenue à l'utilisateur.
 * Utilise styled-components pour la stylisation.
 * 
 * @component
 * @param {object} props - Les propriétés du composant
 * @param {string} props.user - Le nom de l'utilisateur à saluer
 * @returns {JSX.Element} Composant JSX représentant le message de bienvenue
 */
const Welcome = ({ user }) => {
    return (
        <UserContainer className="user">
            <h1>Bonjour <span>{user}</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </UserContainer>
    )
}

// PropTypes
Welcome.propTypes = {
    user: PropTypes.string.isRequired
};

export default Welcome;