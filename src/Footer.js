import React from 'react';

const Footer = () => {
  return (
    <footer className='navbar-expand-lg fixed-bottom navbar-expand-lg bg-dark p-2'>
      <div className='container py-2 text-center'>
        <a className='text-white footer-links' href='https://www.omdbapi.com/' target='_blank' rel='noreferrer'>
          Powered by OMDb API
        </a>
      </div>
    </footer>
  );
};

export default Footer;
