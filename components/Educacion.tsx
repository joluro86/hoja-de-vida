import React from 'react';
import { CardEducacion } from './Card_educacion';

const Educacion = () => {
  return (
    <div className='mt-8'>
      <div className='text-center flex flex-col items-center justify-center mx-auto'>
        <h2 className='text-4xl font-bold color_letra'>Educación</h2>
        <p className='w-[50%] mt-4 color_letra'>
          Mi trayectoria educativa ha sido el cimiento de mi carrera,
          proporcionándome las habilidades y conocimientos necesarios para
          enfrentar los desafíos del mundo tecnológico.
        </p>
      </div>
      <div className='fondo_cards my-6'>
        <div className='p-2 flex flex-wrap justify-center gap-4'>
          <CardEducacion
            universidad='Universidad de Antioquia'
            tipo='Estudiante'
            fecha='feb 2018 - Actualmente'
            certificado='Ingeniería de Sistemas'
            descripcion='Mi viaje en la Ingeniería de Sistemas va más allá de las aulas; es una aventura apasionante de resolución de problemas y descubrimiento constante. Como estudiante, me sumerjo en el fascinante mundo de la tecnología, explorando las complejidades de los sistemas y desarrollando habilidades que me permitirán innovar y contribuir al avance de la sociedad a través de la tecnología.'
          />
        </div>
        <div className='flex flex-wrap justify-center gap-4'>
          <CardEducacion
            universidad='Servicio Nacional de Aprendizaje'
            tipo='Estudiante'
            fecha='feb 2018 - Actualmente'
            certificado='Tecnólogo en Sistemas'
            descripcion='Con orgullo, llevo el título de Tecnólogo en Sistemas otorgado por el SENA. Esta experiencia de aprendizaje intensiva no solo me ha proporcionado habilidades técnicas sólidas, sino también una perspectiva práctica y orientada a la resolución de problemas. La formación en el SENA ha sido fundamental para mi desarrollo profesional, equipándome con las herramientas necesarias para destacar en el mundo de la tecnología.'
          />
        </div>
      </div>
    </div>
  );
};

export { Educacion };
