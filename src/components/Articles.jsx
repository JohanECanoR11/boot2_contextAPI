import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Articles.css';

export const Articles = () => {
  const [coffees, setCoffees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoffees = async () => {
      try {
        const response = await fetch('https://api.sampleapis.com/coffee/hot');
        if (!response.ok) {
          throw new Error('La respuesta de la red no fue correcta');
        }
        const data = await response.json();
        setCoffees(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCoffees();
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="articles-container">
      {coffees.map((coffee) => (
        <div key={coffee.id} className="coffee-card">
          <h2>{coffee.title}</h2>
          <img src={coffee.image} alt={coffee.title} className="coffee-image" />
          <p><strong>Descripción:</strong> {coffee.description}</p>
          <Link to={`/article/${coffee.id}`}>Ver Detalles</Link>
        </div>
      ))}
    </div>
  );
};
