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
    if (searchTitle === '') {
      window.alert('Search title is mandatory');
    }

    props.func({
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
    <div className='row'>
      <div className='col-lg-12'>
        <div className='card'>
          <div className='card-body'>
            <div className='row'>
              <div className='col-lg-5'>
                <div className='input-group mb-3'>
                  <span className='input-group-text'>Title</span>
                  <input
                    type='text'
                    className='form-control'
                    id='filterTitle'
                    placeholder='Batman'
                    onChange={(e) => handleSearchTitle(e)}
                    value={searchTitle}
                    onKeyDown={(e) => triggerSearchOnEnter(e)}
                  />
                </div>
              </div>

              <div className='col-lg-3'>
                <div className='input-group mb-3'>
                  <span className='input-group-text'>Year</span>
                  <input type='number' className='form-control' id='filterYear' placeholder='2022' min='1600' maxLength='250' onChange={(e) => handleSearchYear(e)} value={searchYear} />
                </div>
              </div>

              <div className='col-lg-3'>
                <div className='input-group mb-3'>
                  <span className='input-group-text'>Type</span>
                  <select className='form-control form-select' id='typeFilter' onChange={(e) => handleSearchType(e)} value={searchType}>
                    <option value=''>All</option>
                    <option value='movie'>Movie</option>
                    <option value='series'>Series</option>
                    <option value='episode'>Episode</option>
                  </select>
                </div>
              </div>

              <div className='col-lg-1'>
                <div className='mb-3'>
                  <button type='button' className='btn btn-primary btn-block' onClick={(e) => handleSearch(e)}>
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
