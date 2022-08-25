import React from 'react';
import { Navbar } from './navbar/Navbar';
import { Intro } from './intro/Intro';

export const Home = () => {
  return (
    <React.StrictMode>
      <Navbar />
      <Intro />
    </React.StrictMode>
  );
};
