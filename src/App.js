import React, { useState } from 'react';
import Movies from './Movies';
import SearchBar from './SearchBar';
import PageNum from './PageNum';

const App = () => {
  const [searchTerm, setSearchTerm] = useState({});
  const [totalResults, setTotalResults] = useState(1);

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12 mx-auto' style={{ paddingLeft: '15%', paddingRight: '15%' }}>
          <SearchBar setSearchTerm={setSearchTerm} />
        </div>
      </div>
      <div className='row'>
        <div className='col-12' style={{ paddingLeft: '15%', paddingRight: '15%' }}>
          <Movies searchTerm={searchTerm} setTotalPages={setTotalResults} />
        </div>
      </div>
      <div className='row'>
        <div className='col-12' style={{ paddingLeft: '15%', paddingRight: '15%' }}>
          <PageNum setSearchTerm={setSearchTerm} searchTerm={searchTerm} totalResults={totalResults} />
        </div>
      </div>
    </div>
  );
};

export default App;
