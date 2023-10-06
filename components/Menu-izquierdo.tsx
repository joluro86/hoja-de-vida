import React from 'react'
import { FotoComponent } from './Foto-aside'
import { Skills } from "@/components/Skills";
import { Skill } from './Skill';
import { LineaHorizontal } from './Border_bottom';

const Menu_izquierdo = () => {
  return (
    <aside className='aside'>

      <FotoComponent />

      <div>
        <Skills titulo="Idiomas" />
        <Skill skill='Español' porcentaje='100' barraClaseAdicional='barra_español' />
        <Skill skill='Inglés' porcentaje='60' barraClaseAdicional='barra_ingles' />
        <div className='mt-4 w-full'>
          <LineaHorizontal />
        </div>
      </div>

      <div>
        <Skills titulo="Lenguajes de Programación" />
        <Skill skill='Html' porcentaje='100' barraClaseAdicional='barra_html' />
        <Skill skill='CSS' porcentaje='60' barraClaseAdicional='barra_css' />
        <Skill skill='Javascript' porcentaje='60' barraClaseAdicional='barra_js' />
        <Skill skill='Python' porcentaje='60' barraClaseAdicional='barra_python' />
        <Skill skill='PHP' porcentaje='60' barraClaseAdicional='barra_php' />
        <div className='mt-4 w-full'>
          <LineaHorizontal />
        </div>
      </div>

      <div>
        <Skills titulo="Otras habilidades" />
        <Skill skill='Html' porcentaje='100' barraClaseAdicional='barra_html' />
        <Skill skill='CSS' porcentaje='60' barraClaseAdicional='barra_css' />
        <div className='mt-4 w-full'>
          <LineaHorizontal />
        </div>
      </div>

    </aside>
  )
}

export { Menu_izquierdo }

