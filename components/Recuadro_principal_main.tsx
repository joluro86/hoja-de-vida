import { MdArrowCircleRight } from 'react-icons/md';
import Modal from 'react-modal';
import React, { useState } from 'react';
import Image from 'next/image';

const Recuadro_principal_main = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className='recuadro_principal_main flex flex-row h-[480px] mt-0 '>
      <div className='w-[60%] h-full flex flex-col px-16 py-4 gap-2'>
        <span className='text-4xl font-bold mt-4'>
          Soy Jorge Luis Rodriguez
        </span>
        <span className='mb-8 text-4xl font-bold'>
          <span className='text-blue-500'>Full Stack</span> Developer
        </span>
        <p className='mb-12 w-4/5 color_letra'>
          Desarrollador de software apasionado con experiencia en el diseño y
          creación de soluciones innovadoras. Mi enfoque se centra en la calidad
          del código y la resolución eficiente de problemas para superar las
          expectativas del cliente.
        </p>
        <button
          className='flex bg-blue-500 hover:bg-blue-700 w-44 h-12 items-center text-white font-bold py-1 px-4 rounded'
          onClick={openModal}
        >
          Saber más!{' '}
          <span className='ml-4 text-xl'>
            <MdArrowCircleRight />
          </span>
        </button>
      </div>
      <div className='w-[40%] flex items-center justify-center mx-auto'>
        <Image
          src='/img/foto.png'
          alt='Foto de hoja de vida'
          className='w-full h-full'
        />
      </div>
      <Modal isOpen={modalOpen} onRequestClose={closeModal}>
        <div className='w-[50%] items-center m-auto mt-12 bg-cyan-100 p-6 rounded'>
          <div className='text-center color_letra'>
            ¡Saludos! Soy un desarrollador de software comprometido con la
            creación de soluciones tecnológicas que marquen la diferencia. Mi
            enfoque se centra en la excelencia técnica y la entrega de productos
            que superen las expectativas. Estoy en busqueda de ampliar mi
            experiencia laboral en el fascinante mundo del desarrollo de
            software. Gracias por explorar mi perfil.
          </div>
          <div className='text-center mt-6'>
            <button
              onClick={closeModal}
              className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            >
              Cerrar
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export { Recuadro_principal_main };
