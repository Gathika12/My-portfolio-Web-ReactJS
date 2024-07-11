// Layout.js

import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Preloader from '../components/Preloader/Preloader';
import { Container } from './LayoutStyles';

export const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoading = () => {
      setTimeout(() => setLoading(false), 2000); // Simulate loading delay
    };

    handleLoading();

    return () => {
      clearTimeout(handleLoading);
    };
  }, []);

  return (
    <>
      <Preloader isLoaded={!loading} />
      <Container style={{ display: loading ? 'none' : 'block' }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </Container>
    </>
  );
};
