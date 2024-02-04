import { useEffect, useState } from "react";

export default function useFetch(url, options = {}) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  async function fetchDetails() {
    try {
      setPending(true);
      const response = await fetch(url,{...options});
      const detail = await response.json();
      setData(detail);
      setPending(false);
    } catch (err) {
      setError(err.message);
    }
  }
  useEffect(() => {
    fetchDetails();
  }, []);
  return { data, error, pending };
}
