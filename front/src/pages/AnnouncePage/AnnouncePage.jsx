import React from 'react';
import { Carousel } from 'flowbite-react';

export default function AnnouncePage() {
  return (
    <div className="bg-gray-100 min-h-screen">

      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to Le Coin Bon</h1>

        <div className="mb-8">
          <Carousel>
            <img src="https://via.placeholder.com/800x400" alt="Event 1" />
            <img src="https://via.placeholder.com/800x400" alt="Event 2" />
            <img src="https://via.placeholder.com/800x400" alt="Event 3" />
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
        
      </main>

    </div>
  );
}