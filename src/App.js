import React, { useState } from 'react';
import Movies from './Movies';
import SearchBar from './SearchBar';

const App = () => {
  const [searchTerm, setSearchTerm] = useState({});

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12 mx-auto' style={{ paddingLeft: '15%', paddingRight: '15%' }}>
          <SearchBar func={setSearchTerm} />
        </div>
      </div>
      <div className='row'>
        <div className='col-12' style={{ paddingLeft: '15%', paddingRight: '15%' }}>
          <Movies {...searchTerm} />
        </div>
      </div>
    </div>
  );
};

export default App;
