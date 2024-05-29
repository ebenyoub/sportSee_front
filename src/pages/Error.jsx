import { Link, useLocation } from "react-router-dom";

const Error = () => {
    const location = useLocation();
    const errorMessage = location.state?.message || "Une erreur est survenue.";

    return (
        <main className="error">
            <h1>404</h1>
            <p>{errorMessage}</p>
            <Link to={"/profile"}>Retour</Link>
        </main>
    );
}

export default Error;
