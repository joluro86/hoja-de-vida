import React from 'react';
import { CardPortafolio } from './Card_portafolio';

const Portafolio = () => {
  return (
    <div className='mt-8 overflow-x-auto '>
      <div className='text-center flex flex-col items-center justify-center mx-auto'>
        <h2 className='text-4xl font-bold color_letra'>Portafolio</h2>
        <p className='w-[50%] mt-4 color_letra'>
        Aquí encontrarás una colección de proyectos que reflejan mi pasión por la programación y el diseño web. Cada proyecto cuenta una historia única de desafíos superados y soluciones innovadoras. ¡Explora y descubre mi viaje en el mundo del desarrollo
        </p>
      </div>
      <div className='my-6'>
        <div className='p-2 overflow-x-auto flex flex-row'>
          <CardPortafolio
            imagen='/img/pc1.jpg'
            titulo='Equipos La Obra'
            descripcion='Aplicación web diseñada para llevar el registro de alquiler de equipos de construcción, ventas y existencia de productos!'
            aprender_mas='Leer mas'
            enlace='#'
          />
          <CardPortafolio
            imagen='/img/pc2.jpg'
            titulo='App Control Pedidos'
            descripcion='Aplicativo web creado para el control de vencimientos de obra y ejecución en terreno para la empresa Mejía Acevedo!'
            aprender_mas='Leer mas'
            enlace='#'
          />
          <CardPortafolio
            imagen='/img/pc3.jpg'
            titulo='Lorem Ipsun'
            descripcion='Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, vel iure laboriosam doloremque quod ullam exercitationem ab quae quis nostrum quidem molestiae explicabo velit ipsa magni harum facilis. Corporis, consequatur!'
            aprender_mas='Leer mas'
            enlace='#'
          />
          <CardPortafolio
            imagen='/img/pc4.jpg'
            titulo='Lorem Ipsun'
            descripcion='Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, vel iure laboriosam doloremque quod ullam exercitationem ab quae quis nostrum quidem molestiae explicabo velit ipsa magni harum facilis. Corporis, consequatur!'
            aprender_mas='Leer mas'
            enlace='#'
          />
        </div>
      </div>
    </div>
  );
};

export { Portafolio };
