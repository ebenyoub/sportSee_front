import { useEffect, useState } from "react";
import axios from "axios";

/**
 * Hook personnalisé pour récupérer des données depuis une URL spécifiée.
 * Les données sont mises en cache dans le localStorage pour éviter les appels répétés à l'API.
 * 
 * @function useFetch
 * @param {string} url - L'URL de l'API à partir de laquelle récupérer les données
 * @param {string} fileName - Le nom du fichier pour la clé de stockage local
 * @param {string|number} id - L'identifiant pour distinguer les données stockées
 * @returns {Object} - Un objet contenant les données récupérées, l'état de chargement et une éventuelle erreur
 * @returns {any} data - Les données récupérées de l'API ou du localStorage
 * @returns {boolean} loading - Indique si les données sont en cours de chargement
 * @returns {Error|null} error - Une erreur survenue lors de la récupération des données, sinon null
 */
const useFetch = (url, fileName, id) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const dataLocalStorage = localStorage.getItem(`${fileName}_${id}`);
                if (dataLocalStorage) {
                    setData(JSON.parse(dataLocalStorage));
                    setLoading(false);
                    console.log(`Fetch ${fileName} from localStorage`);
                } else {
                    const response = await axios.get(url);
                    setData(response.data);
                    localStorage.setItem(`${fileName}_${id}`, JSON.stringify(response.data));
                    setLoading(false);
                    console.log(`Fetch ${fileName} from API`);
                }
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [url, fileName, id]);


    return { data, loading, error };
};

export default useFetch;
