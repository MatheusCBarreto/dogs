import React from 'react';
import Feed from '../Components/Feed/Feed';
import Head from './Helper/Head';

export const Home = () => {
  return (
    <section className="conteiner mainConteiner">
      <Head
        title="Fotos"
        description="Home do site dogs, com o feed de fotos"
      />
      <Feed />
    </section>
  );
};
export default Home;
