import React from 'react'
import css from './styles/App.module.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Product from './components/Product/Product';
import AboutUs from './components/AboutUs/AboutUs';
import News from './components/News/News';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className={`bg-primary ${css.wrapper}`}>
      <div className={css.container}>
        <Header />
        <Hero />
        <Product />
        <AboutUs />
        <News />
        <Footer />
      </div>
    </div>
  )
}

export default App