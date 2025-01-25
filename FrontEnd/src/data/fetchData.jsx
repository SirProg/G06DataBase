import { useEffect, useState } from "react"

export function fetchData(){
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch_Data = () => {
      try {
        const response = fetch("https://g06databaseback-production.up.railway.app/api/calzados", {method: 'GET'});
        
        if (!response.ok) {
          throw new Error("Error HTTP " + response.status);
        }

        const result = response.json();

        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetch_Data();
  },[]);

  return { data, loading, error };
    
};