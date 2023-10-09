import React from 'react';
import { IconType } from 'react-icons';

interface CardEducacionProps {
    universidad: string;
    tipo: string;
    fecha: string;
    descripcion: string;
    certificado: string;
}

const CardEducacion: React.FC<CardEducacionProps> = ({ universidad, tipo, fecha, certificado, descripcion }) => {
    return (
        <div className="pt-6 pl-4 pr-6 pb-4 flex w-full flex flex-row border-b-2 w-[95%]">

            <div className='w-[40%]'>
                <span className='font-medium' >{universidad}</span>
                <div className='mt-2'>
                    <span className='text-sm mr-4'>
                        {tipo}
                    </span>
                    <span className='text-xs bg-blue-500'>
                        {fecha}
                    </span>
                </div>
            </div>
            <div className='w-[60%] mb-4'>
                <span className=''>{certificado}</span>
                <p className=''>{descripcion}</p>
            </div>
        </div>
    );
};

export { CardEducacion };