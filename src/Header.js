import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container py-2'>
        <Link className='navbar-brand header-font fw-bold' to='/'>
          <img src={process.env.PUBLIC_URL + '/logo192.png'} alt='' width='30' height='30' className='mx-2 header-icon' />
          OMDb Search
        </Link>
      </div>
    </nav>
  );
};

export default Header;
