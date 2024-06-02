import { useEffect, useState } from "react";
import axios from "axios";
import mockedData from "./MockedData";

/**
 * Hook personnalisé pour récupérer des données depuis une URL spécifiée.
 * Les données sont mises en cache dans le localStorage pour éviter les appels répétés à l'API.
 * 
 * @function useFetch
 * @param {string} url - L'URL de l'API à partir de laquelle récupérer les données
 * @param {string} fileName - Le nom du fichier pour la clé de stockage local
 * @param {string|number} id - L'identifiant pour distinguer les données stockées
 * @param {boolean} [mocked=true] - Indique si les données simulées doivent être utilisées
 * @returns {Object} - Un objet contenant les données récupérées, l'état de chargement et une éventuelle erreur
 * @returns {any} data - Les données récupérées de l'API ou du localStorage
 * @returns {boolean} loading - Indique si les données sont en cours de chargement
 * @returns {Error|null} error - Une erreur survenue lors de la récupération des données, sinon null
 */
const useFetch = (url, fileName, id, mocked = false) => {
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
                } else {
                    const response = await axios.get(url);
                    setData(response.data.data);
                    localStorage.setItem(`${fileName}_${id}`, JSON.stringify(response.data.data));
                    setLoading(false);
                }
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        // Ajout du switch pour les données mockées
        if (mocked) {
            const newData = mockedData[fileName].find(dat => dat.id == id || dat.userId == id)
            setData(newData)
            setLoading(false)
        } else {
            fetchData();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url, fileName, id, fileName]);


    return { data, loading, error };
};

export default useFetch;
