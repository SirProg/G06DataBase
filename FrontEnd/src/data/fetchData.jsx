import { useEffect, useState } from "react"

export function fetchData(){
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch_Data = async () => {
      try {
        const response = await fetch("https://g06databaseback-production.up.railway.app/api/calzados");
        
        if (!response.ok) {
          throw new Error("Error HTTP " + response.status);
        }

        const result = await response.json();
        
        if(!Array.isArray(result)){
          console.error("Unexpected data format:", data)
          throw new Error("Received unexpected data format")
        }

        if(result.length > 0){
          setData(result);
        }
      } catch (error) {
        setError(error.message);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetch_Data();
  },[]);
  return { data, loading, error };
    
};