import React from 'react'
import { MdArrowCircleRight } from "react-icons/md";

const Recuadro_principal_main = () => {
  return (
    <div className='recuadro_principal_main flex flex-row h-[480px] '>
      <div className='w-[60%] h-full flex flex-col px-8 py-4 gap-2'>
        <span className='text-4xl font-bold mt-4'>Soy Jorge luis Rodriguez</span>
        <span className='mb-8 text-4xl font-bold'><span className='text-blue-500'>Full Stack</span> Developer</span>
        <p className='mb-12 w-4/5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nam quo, nulla possimus aliquid, accusamus sed illo odio, itaque aliquam enim eos? Eveniet, labore eius id modi blanditiis et aspernatur?</p>
        <button className="flex bg-blue-500 hover:bg-blue-700 w-44 h-12  items-center text-white font-bold py-1 px-4 rounded">
          Saber mas! <span className="ml-4 text-xl"><MdArrowCircleRight/></span>
        </button>
      </div>
      <div className='w-[40%] flex items-center justify-center mx-auto'>
        <img src="/img/foto_menu.png" alt="Foto de hoja de vida" className='w-full h-full' />
      </div>
    </div>
  )
}

export { Recuadro_principal_main }
