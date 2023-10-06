
import React from 'react';
import { LineaHorizontal } from './Border_bottom';

const FotoComponent = () => {
  return (
    <div className='flex flex-col items-center gap-2 pb-4 relative'>
      <img src="/img/foto_menu.jpeg" alt="Foto de hoja de vida" className='rounded-full w-36 h-36' />
      <span className='circulo_verde_foto'></span>
      <span className='font-medium text-slate-900 mt-4'>Jorge Luis Rodríguez</span>
      <span>Full-Stack Developer</span>
      <LineaHorizontal/>
      <div className='flex flex-col w-full py-2 text-sm'>
        <div className='flex justify-between'>
          <span>Edad:</span>
          <span>37</span>
        </div>
        <div className='flex justify-between'>
          <span>Residencia:</span>
          <span>Colombia</span>
        </div>
        <div className='flex justify-between'>
          <span >Freelance:</span>
          <span >Disponible</span>
        </div>
        <div className='flex justify-between'>
          <span>Dirección:</span>
          <span>Turbo, Ant.</span>
        </div>
      </div>
      <LineaHorizontal/>
    </div>
  );
};

export { FotoComponent };

