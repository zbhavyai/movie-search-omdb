import React, { useState } from 'react';

const SearchBar = (props) => {
  const [searchTitle, setSearchTitle] = useState('');
  const [searchType, setSearchType] = useState('');
  const [searchYear, setSearchYear] = useState('');

  const handleSearchTitle = (e) => {
    setSearchTitle(e.target.value);
  };

  const handleSearchType = (e) => {
    setSearchType(e.target.value);
  };

  const handleSearchYear = (e) => {
    setSearchYear(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchTitle === '') {
      window.alert('Search title is mandatory');
    }

    props.setSearchTerm({
      title: searchTitle,
      type: searchType,
      year: searchYear,
    });
  };

  const triggerSearchOnEnter = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='row pt-5'>
      <div className='col-lg-12'>
        <div className='card'>
          <div className='card-body'>
            <form onSubmit={handleSearch}>
              <div className='row'>
                <div className='col-lg-4'>
                  <div className='input-group'>
                    <span className='input-group-text'>Title</span>
                    <input type='text' className='form-control' id='filterTitle' onChange={(e) => handleSearchTitle(e)} value={searchTitle} onKeyDown={(e) => triggerSearchOnEnter(e)} />
                  </div>
                </div>

                <div className='col-lg-3'>
                  <div className='input-group'>
                    <span className='input-group-text'>Year</span>
                    <input type='number' className='form-control' id='filterYear' min='1600' max={2023} maxLength='250' onChange={(e) => handleSearchYear(e)} value={searchYear} />
                  </div>
                </div>

                <div className='col-lg-3'>
                  <div className='input-group'>
                    <span className='input-group-text'>Type</span>
                    <select className='form-control form-select' id='typeFilter' onChange={(e) => handleSearchType(e)} value={searchType}>
                      <option value=''>All</option>
                      <option value='movie'>Movie</option>
                      <option value='series'>Series</option>
                      <option value='episode'>Episode</option>
                    </select>
                  </div>
                </div>

                <div className='col-lg-2'>
                  <div className='d-grid'>
                    <button type='submit' className='btn btn-primary'>
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
