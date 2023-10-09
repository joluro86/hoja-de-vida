import React from 'react'
import { CardConocimiento } from './Card_conocimiento'
import { HiOutlineComputerDesktop } from 'react-icons/hi2';

const Conocimientos = () => {
    return (
        <div className='mt-8'>
            <div className='text-center flex flex-col items-center justify-center mx-auto'>
                <h2 className='text-4xl font-bold'>Mis conocimientos</h2>
                <p className='w-[50%] mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, vel iure laboriosam doloremque quod ullam exercitationem ab quae quis nostrum quidem molestiae explicabo velit ipsa magni harum facilis. Corporis, consequatur!</p>
            </div>
            <div className='flex flex-wrap justify-center gap-4'>
                <CardConocimiento
                    titulo="Desarrollo Web"
                    icono={HiOutlineComputerDesktop}
                    descripcion="Descripción aquí"
                />
                <CardConocimiento
                    titulo="Desarrollo Web"
                    icono={HiOutlineComputerDesktop}
                    descripcion="Descripción aquí"
                />
                <CardConocimiento
                    titulo="Desarrollo Web"
                    icono={HiOutlineComputerDesktop}
                    descripcion="Descripción aquí"
                />
                <CardConocimiento
                    titulo="Desarrollo Web"
                    icono={HiOutlineComputerDesktop}
                    descripcion="Descripción aquí"
                />
                <CardConocimiento
                    titulo="Desarrollo Web"
                    icono={HiOutlineComputerDesktop}
                    descripcion="Descripción aquí"
                />
                <CardConocimiento
                    titulo="Desarrollo Web"
                    icono={HiOutlineComputerDesktop}
                    descripcion="Descripción aquí"
                />
            </div>
        </div>

    )
}

export default Conocimientos
