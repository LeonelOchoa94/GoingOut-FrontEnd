import React from 'react';
import { Navbar } from './navbar/Navbar';
import { Intro } from './intro/Intro';
import { Negocio } from './negocio/Negocio';

export const Home = () => {
  return (
    <React.StrictMode>
      <Navbar />
      <Intro />
      <Negocio />
    </React.StrictMode>
  );
};
