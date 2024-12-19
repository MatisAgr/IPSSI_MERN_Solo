import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export default function DetailAnnoncePage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');
  const [announce, setAnnounce] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnnounce = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/announce/${id}`);
        setAnnounce(response.data);
      } catch (err) {
        setError('Failed to fetch announce details');
      } finally {
        setLoading(false);
      }
    };

    fetchAnnounce();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      {announce && (
        <div className="bg-white shadow-md rounded p-4">
          <h1 className="text-3xl font-bold mb-4">{announce.title}</h1>
          <div className="mb-4">
            <img src={announce.images[0]} alt={announce.title} className="w-full h-64 object-cover rounded" />
          </div>
          <p className="text-gray-700 text-base mb-4">{announce.description}</p>
          <p className="text-gray-700 text-base mb-4"><strong>Prix:</strong> {announce.price}€</p>
          <p className="text-gray-700 text-base mb-4"><strong>Catégorie:</strong> {announce.category}</p>
          <p className="text-gray-700 text-base mb-4"><strong>Lieu:</strong> {announce.location}</p>
          <p className="text-gray-700 text-base mb-4"><strong>Publié par:</strong> {announce.user.username}</p>
          <p className="text-gray-700 text-base mb-4"><strong>Date de création:</strong> {new Date(announce.createdAt).toLocaleDateString()}</p>
        </div>
      )}
    </div>
  );
}