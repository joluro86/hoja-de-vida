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
        <div className='mt-2 w-full'>
          <LineaHorizontal />
        </div>
      </div>
      <div>
        <Skills titulo="Lenguajes de Programación" />
        <Skill skill='Python' porcentaje='80' barraClaseAdicional='barra_python' />
        <Skill skill='PHP' porcentaje='80' barraClaseAdicional='barra_php' />
        <Skill skill='Javascript' porcentaje='60' barraClaseAdicional='barra_js' />
        <div className='mt-2 w-full'>
          <LineaHorizontal />
        </div>
      </div>
      <div>
        <Skills titulo="Otras habilidades" />
        <Skill skill='Html' porcentaje='90' barraClaseAdicional='barra_html' />
        <Skill skill='CSS' porcentaje='70' barraClaseAdicional='barra_css' />
      </div>
    </aside>
  )
}

export { Menu_izquierdo }

