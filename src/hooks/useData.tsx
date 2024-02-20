import { useEffect, useState } from "react";
import apiClinet from "../services/api-clinet";
import { CanceledError } from "axios";

interface FetchDataRes<T> {
  results: T[];
}

function useData<T>(endPoint: string) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClinet
      .get<FetchDataRes<T>>(endPoint, { signal: controller.signal })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { data, error, isLoading };
}

export default useData;
