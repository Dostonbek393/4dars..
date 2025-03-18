import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Could not fetch the data");
        }
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsPending(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isPending, error };
};
