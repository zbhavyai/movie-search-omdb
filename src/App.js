import React, { useState } from 'react';
import Movies from './Movies';
import SearchBar from './SearchBar';

const App = () => {
  const [searchTerm, setSearchTerm] = useState({});

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12 mx-auto' style={{ paddingLeft: '15%', paddingRight: '15%' }}>
          <SearchBar setSearchTerm={setSearchTerm} />
        </div>
      </div>
      <Movies searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </div>
  );
};

export default App;
