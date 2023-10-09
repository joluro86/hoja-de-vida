import React from 'react';
import { IconType } from 'react-icons';

interface CardConocimientoProps {
    titulo: string;
    icono: IconType; 
    descripcion: string;
}

const CardConocimiento: React.FC<CardConocimientoProps> = ({ titulo, icono: IconComponent, descripcion }) => {
    return (
        <div className="p-4 fondo_cards flex mt-4 max-w-[40%] min-w-[32%]">
            <div className='flex flex-col items-center justify-center mx-auto'>
                <div className='icono text-8xl text-blue-500'>
                    <IconComponent style={{ strokeWidth: 0.8 }} />
                </div>
                <span className='titulo'>{titulo}</span>
                <span className='descripcion'>{descripcion}</span>
            </div>
        </div>
    );
};

export { CardConocimiento };



