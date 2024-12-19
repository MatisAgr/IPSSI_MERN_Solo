import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Carousel } from 'flowbite-react';
import CardAnnouce from '../../components/Card/CardAnnouce';

export default function AnnouncePage() {
  const [announces, setAnnounces] = useState([]);

  useEffect(() => {
    const fetchAnnounces = async () => {
      try {
        const response = await axios.get('http://localhost:8080/announces');
        setAnnounces(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des annonces', error);
      }
    };

    fetchAnnounces();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to Le Coin Bon</h1>

        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mb-8">
          <Carousel>
            <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
          </Carousel>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-2">Noël</h2>
            <p>Découvrez les dernières annonces pour Noël.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-2">Printemps</h2>
            <p>Explorez les dernières annonces pour le printemps.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-2">Été</h2>
            <p>Découvrez les dernières annonces pour l'été.</p>
          </div>
        </div>

        {/* Emplacement pour mettre une grille d'article en card  */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {announces.map((announce) => (
            <CardAnnouce
              key={announce._id}
              title={announce.title}
              description={announce.description}
              price={announce.price}
              category={announce.category}
              location={announce.location}
              images={announce.images}
              createdAt={new Date(announce.createdAt).toLocaleDateString()}
              user={announce.user.username}
            />
          ))}
        </div>
      </main>
    </div>
  );
}