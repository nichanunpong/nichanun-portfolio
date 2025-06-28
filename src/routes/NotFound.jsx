import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const NotFound = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
          textAlign: 'center',
          padding: '2rem',
        }}>
        <h1 style={{ fontSize: '6rem', marginBottom: '1rem', color: '#fff' }}>
          404
        </h1>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#fff' }}>
          Page Not Found
        </h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#ccc' }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to='/'
          className='btn'
          style={{
            fontSize: '1.1rem',
            padding: '12px 24px',
          }}>
          Go Back Home
        </Link>
      </div>
      <BackToTop />
      <Footer />
    </div>
  );
};

export default NotFound;
