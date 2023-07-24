import React from 'react';

import './contato.css';
import { Feature } from '../../components';

const Contato = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id="contato">
      <div className='gpt3__whatgpt3-feature'>
      <Feature title="Entre em contato conosco" text="Tem algum comentário, elogio ou sugestão,
        ou gostaria que entrássemos em contato com você?
        Envie sua mensagem atráves deste formulário.
        
        ramackrepre@gmail.com
        
        Tel.: (47) 9 9965 1936" />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>
          The possibilities are beyonde your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container' >
        <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />       
        <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />        
        <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      </div>
    </div>
  )
}

export default Contato;
