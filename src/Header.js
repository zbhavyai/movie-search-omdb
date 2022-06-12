import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div class='container-fluid'>
        <Link className='navbar-brand' to='/' style={{ fontFamily: 'monospace' }}>
          <img src={process.env.PUBLIC_URL + 'logo192.png'} alt='' width='30' height='30' className='mx-2' style={{ position: 'relative', top: '-4px' }} />
          OMDB Search
        </Link>
      </div>
    </nav>
  );
};

export default Header;
