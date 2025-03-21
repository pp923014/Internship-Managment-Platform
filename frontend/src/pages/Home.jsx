import React ,{useState}from 'react';
import Slide1 from '../components/HomePageCompo/Slide1';
import Slide2 from '../components/HomePageCompo/Slide2';
import Slide3 from '../components/HomePageCompo/Slide3';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Slide1/>
      <Slide2/>
      <Slide3/>
      <Footer/>
    </div>
  );
}

export default Home;
