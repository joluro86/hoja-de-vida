
import React from 'react';

const FotoComponent = () => {
  return (
    <div className='flex flex-col items-center gap-2 pt-8 pb-4 relative'>      
      <img src="/img/foto_menu.jpeg" alt="Foto de hoja de vida" className='rounded-full w-36 h-36' />
      <span className='circulo_verde_foto'></span>
      <span className='font-medium text-slate-900 mt-4'>Jorge Luis Rodríguez</span>
      <span className='border_botton_cards'>Full-Stack Developer</span>
    </div>
  );
};

export {FotoComponent};

