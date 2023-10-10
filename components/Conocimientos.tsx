import React from 'react';
import { CardConocimiento } from './Card_conocimiento';
import { HiOutlineComputerDesktop, HiOutlineCommandLine } from 'react-icons/hi2';
import { HiOutlineDatabase, HiOutlineAnnotation, HiOutlineChartSquareBar } from 'react-icons/hi';


const Conocimientos = () => {
    return (
        <div className='mt-8'>
            <div className='text-center flex flex-col items-center justify-center mx-auto'>
                <h2 className='text-4xl font-bold color_letra'>Mis conocimientos</h2>
                <p className='w-[50%] mt-4 color_letra'>Mi sección de conocimientos en desarrollo de software es el corazón de mi trayectoria profesional. Aquí destacan mis habilidades, experiencia y dedicación en el arte de dar vida a soluciones informáticas impactantes.</p>
            </div>
            <div className='flex flex-wrap justify-center gap-4'>
                <CardConocimiento
                    titulo="Desarrollo Web"
                    icono={HiOutlineComputerDesktop}
                    descripcion="Aplicaciones Web"
                />

                <CardConocimiento
                    titulo="Analisis de datos"
                    icono={HiOutlineDatabase}
                    descripcion="Big Data"
                />
                <CardConocimiento
                    titulo="UI/UX Web"
                    icono={HiOutlineChartSquareBar}
                    descripcion="Apps móviles, Diseño web"
                />
                <CardConocimiento
                    titulo="Html - CSS3"
                    icono={HiOutlineCommandLine}
                    descripcion="Maquetación web"
                />
                <CardConocimiento
                    titulo="Frontend"
                    icono={HiOutlineAnnotation}
                    descripcion="Intuitivo, responsive"
                />
            </div>
        </div>

    )
}

export { Conocimientos }
