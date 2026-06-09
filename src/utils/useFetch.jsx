import { useEffect, useState } from "react";
import axios from "axios";
import mockedData from "./MockedData";
import { USE_MOCKED_DATA } from "./Constants";

/**
 * Hook personnalisé pour récupérer des données depuis une URL spécifiée.
 * Les données peuvent provenir des mocks locaux ou de l'API selon la configuration.
 * 
 * @function useFetch
 * @param {string} url - L'URL de l'API à partir de laquelle récupérer les données
 * @param {string} fileName - Le nom du fichier pour la clé de stockage local
 * @param {string|number} id - L'identifiant pour distinguer les données stockées
 * @param {boolean} [mocked=USE_MOCKED_DATA] - Indique si les données simulées doivent être utilisées
 * @returns {Object} - Un objet contenant les données récupérées, l'état de chargement et une éventuelle erreur
 * @returns {object|null} data - Les données récupérées de l'API ou des mocks
 * @returns {boolean} loading - Indique si les données sont en cours de chargement
 * @returns {Error|null} error - Une erreur survenue lors de la récupération des données, sinon null
 */
const useFetch = (url, fileName, id, mocked = USE_MOCKED_DATA) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(url);
                setData(response.data.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        // Ajout du switch pour les données mockées
        if (mocked) {
            const newData = mockedData[fileName].find(dat => String(dat.id) === String(id) || String(dat.userId) === String(id))
            setData(newData)
            setLoading(false)
        } else {
            fetchData();
        }
    }, [url, fileName, id, mocked]);


    return { data, loading, error };
};

export default useFetch;
