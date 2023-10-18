import React from 'react';

interface CardEducacionProps {
  universidad: string;
  tipo: string;
  fecha: string;
  descripcion: string;
  certificado: string;
}

const CardEducacion: React.FC<CardEducacionProps> = ({
  universidad,
  tipo,
  fecha,
  certificado,
  descripcion,
}) => {
  return (
    <div className=' color_letra pt-6 pl-4 pr-6 pb-4 flex w-full flex flex-row border-b-2 w-[95%]'>
      <div className='w-[40%] p-4'>
        <span className='font-medium'>{universidad}</span>
        <div className='mt-4'>
          <span className='text-sm mr-2'>{tipo}</span>
          <span className='text-xs bg-blue-500 p-1 text-white'>{fecha}</span>
        </div>
      </div>
      <div className='w-[60%] mb-4 p-2'>
        <span className='text-xl font-medium'>{certificado}</span>
        <p className='mt-4'>{descripcion}</p>
      </div>
    </div>
  );
};

export { CardEducacion };
