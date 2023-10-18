import React from 'react';

interface CardPortafolioProps {
  imagen: string;
  titulo: string;
  descripcion: string;
  aprender_mas: string;
  enlace: string;
}

const CardPortafolio: React.FC<CardPortafolioProps> = ({
  imagen,
  enlace,
  titulo,
  aprender_mas,
  descripcion,
}) => {
  return (
    <div className='color_letra fondo_cards pt-6 pl-4 pr-6 pb-4 flex flex-col border-b-2 max-w-[40%] min-w-[40%]'>
      <img src={imagen} alt='Foto tomada de internet' className='w-full h-60' />
      <span className='text-lg font-semibold mt-4 my-2'>{titulo}</span>
      <p>{descripcion}</p>
      <a className='text-blue-500' href={enlace}>
        {aprender_mas}
      </a>
    </div>
  );
};

export { CardPortafolio };
