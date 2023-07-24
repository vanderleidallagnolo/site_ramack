import React from 'react'

// this import is possible because of the existence of the file
// ./components/index.js (and the imports it contains)
//import { Article, Brand, CTA, Feature, Navbar } from './components';
import { Brand, CTA, Navbar } from './components';

// this import is possible because of the existen of the file
// ./containers/index.js (and the imports it contains)
import { Footer, Blog, Possibility, Features, WhatGPT3, Header} from './containers';
import { Header2, Produtos, Clientes, Parceiros, Sobre, Contato} from './containers';

import './App.css';

const App = () => {
  return (
    <div className='App' >
      {/* <h1>GPT-3</h1> */}

        <div className="gradient__bg">

            <Navbar />

            <Header />

        </div>

        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />

        <div className="gradient__bg">

          <Navbar />

          <Header2 />

          </div>

          <Produtos />
          <Clientes />
          <Parceiros />
          <Sobre />
          <Contato />

          <Footer />

    </div>
  )
}

export default App
