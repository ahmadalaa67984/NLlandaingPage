import React from 'react'
import Center from '../components/Center.js';
import Feature from '../components/Feature.js';
import Footer from '../components/Footer.js';
import Header from '../components/Header.js';
import Massage from '../components/Massage.js';
import Navbar from '../components/Navbar.js';
import Packages from '../components/Packages.js';
import Target from '../components/Target.js';
import './homePage.css';

function HomePage() {
  return (
    <div className='Home-Page'>
      <Navbar></Navbar>
      <Massage></Massage>
      <Header></Header>
      <Center></Center>
      <Feature></Feature>
      <Target></Target>
      <Packages></Packages>
      <Footer></Footer>
    </div>
  )
}

export default HomePage