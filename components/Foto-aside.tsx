
import React from 'react';
import { LineaHorizontal } from './Border_bottom';

const FotoComponent = () => {
  return (
    <div className='flex flex-col items-center gap-2 pb-2 relative'>
      <img src="/img/foto.png" alt="Foto de hoja de vida" className='rounded-full w-36 h-36 background_foto' />
      <span className='circulo_verde_foto'></span>
      <span className='font-semibold text-slate-900'>Jorge Luis Rodríguez</span>
      <span className='font-sm text-sm'>Full-Stack Developer</span>
      <LineaHorizontal/>
      <div className='flex flex-col w-full py-1 text-sm'>
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
          <span className='text-emerald-400'>Disponible</span>
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

