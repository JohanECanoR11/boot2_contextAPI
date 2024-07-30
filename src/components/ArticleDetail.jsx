import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ArticleDetail.css';

export const ArticleDetail = () => {
  const { id } = useParams();
  const [coffee, setCoffee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoffee = async () => {
      try {
        const response = await fetch(`https://api.sampleapis.com/coffee/hot/${id}`);
        if (!response.ok) {
          throw new Error('La respuesta de la red no fue correcta');
        }
        const data = await response.json();
        setCoffee(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCoffee();
  }, [id]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="article-detail">
      {coffee && (
        <>
          <h1>{coffee.title}</h1>
          <img src={coffee.image} alt={coffee.title} className="coffee-image" />
          <p><strong>Descripción:</strong> {coffee.description}</p> 
        </>
      )}
    </div>
  );
};
