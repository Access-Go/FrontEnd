import React from 'react';
import Layout from '../components/Layout'; // Ajusta la ruta según la ubicación del archivo

const Home = () => {
  return (
    <Layout>
      <section className="bg-white p-4 rounded shadow">
        <h1 className="text-3xl font-bold text-green-900">Bienvenido a AccesoGo</h1>
        <p className="text-gray-700">seccion de bienvenida</p>
      </section>
      <section className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold text-green-900">visita nuestros socios</h2>
        <p className="text-gray-700">El carrusel</p>
      </section>
      <section className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold text-green-900">"Y también para ti... blabla"</h2>
        <p className="text-gray-700">voluntariado y cosas</p>
      </section>
      <section className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold text-green-900">"Juntos podemos blabla"</h2>
        <p className="text-gray-700">los dos botones</p>
      </section>
    </Layout>
  );
};

export default Home;
