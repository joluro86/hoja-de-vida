import React from 'react'
import { HiOutlineComputerDesktop } from 'react-icons/hi2';
import { CardEducacion } from './Card_educacion';

const Educacion = () => {
    return (
        <div className='mt-8'>
            <div className='text-center flex flex-col items-center justify-center mx-auto'>
                <h2 className='text-4xl font-bold'>Educación</h2>
                <p className='w-[50%] mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, vel iure laboriosam doloremque quod ullam exercitationem ab quae quis nostrum quidem molestiae explicabo velit ipsa magni harum facilis. Corporis, consequatur!</p>
            </div>
            <div className='fondo_cards my-6'>            
            <div className='p-2 flex flex-wrap justify-center gap-4'>
                <CardEducacion
                    universidad="Universidad de Antioquia"
                    tipo="Estudiante"
                    fecha="feb 2018 - Actualmente"
                    certificado="Ingeniería de sistemas"
                    descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, vel iure laboriosam doloremque quod ullam exercitationem ab quae quis nostrum quidem molestiae explicabo velit ipsa magni harum facilis. Corporis, consequatur!"
                />                
            </div>
            <div className='flex flex-wrap justify-center gap-4'>
                <CardEducacion
                    universidad="Universidad de Antioquia"
                    tipo="Estudiante"
                    fecha="feb 2018 - Actualmente"
                    certificado="Ingeniería de sistemas"
                    descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, vel iure laboriosam doloremque quod ullam exercitationem ab quae quis nostrum quidem molestiae explicabo velit ipsa magni harum facilis. Corporis, consequatur!"
                />                
            </div>
            <div className='flex flex-wrap justify-center gap-4'>
                <CardEducacion
                    universidad="Universidad de Antioquia"
                    tipo="Estudiante"
                    fecha="feb 2018 - Actualmente"
                    certificado="Ingeniería de sistemas"
                    descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, vel iure laboriosam doloremque quod ullam exercitationem ab quae quis nostrum quidem molestiae explicabo velit ipsa magni harum facilis. Corporis, consequatur!"
                />                
            </div>
            </div>
        </div>

    )
}

export  {Educacion}