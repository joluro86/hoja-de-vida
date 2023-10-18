import { Aside } from '@/components/Aside';
import { Conocimientos } from '@/components/Conocimientos';
import { Recuadro_principal_main } from '@/components/Recuadro_principal_main';
import { Educacion } from '@/components/Educacion';
import { Portafolio } from '@/components/Portafolio';
import { SocialIcons } from '@/components/Social_icons';
import { Footer } from '@/components/Footer';
import React from 'react';

const Home = () => {
  return (
    <div className='relative flex flex-row padre_main'>
      <SocialIcons />
      <main className='main overflow-y-auto'>
        <Recuadro_principal_main />
        <Conocimientos />
        <Educacion />
        <Portafolio />
        <Footer />
      </main>
      <Aside />
    </div>
  );
};
export default Home;
