import React from 'react';

import './sobre.css';

import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Sobre = () => {
  return (
    <div className="gpt3__header section__padding" id="sobre">
      <div className='gpt3__header-content' >
        <h1 className='gradient__text'>RAMACK REPRESENTAÇÕES</h1>
        <p>SOBRE NÓS<br />Ramack Representações atua desde 2006 no setor plástico
        <br />representando empresas produtoras e distribuidoras
        <br /> de resinas, pigmentos, aditivos e compostos.</p>
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='your e-mail address' />
          <button type="button" >Get Started</button>
        </div>

        <div className='gpt3__header-content__people'>
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className='gpt3__header-image'>
        <img src={ai} alt="ai" />
      </div>
    </div>

  )
}

export default Sobre;
