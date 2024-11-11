import { useEffect, useState } from "react";
import { axiosInstance } from "../apis/axios-instance.js";

const useCustomFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                console.log(`Fetching data from URL: ${url}`);
                const response = await axiosInstance.get(url);
                console.log("API Response:", response);
                setData(response.data);
            } catch (error) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [url]);

    return { data, isLoading, isError };
};

export default useCustomFetch;
