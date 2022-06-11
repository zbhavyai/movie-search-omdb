import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useState({
    s: '',
    type: '',
    y: '',
    page: 1,
  });

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchParams['s'] === '') {
      window.alert('Search title is mandatory');
    } else {
      navigate(`/search?${new URLSearchParams(searchParams).toString()}`);
    }
  };

  const triggerSearchOnEnter = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
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
                    <input
                      type='text'
                      className='form-control'
                      id='filterTitle'
                      onChange={(e) => setSearchParams({ ...searchParams, s: e.target.value })}
                      value={searchParams['s']}
                      onKeyDown={(e) => triggerSearchOnEnter(e)}
                      required
                    />
                  </div>
                </div>

                <div className='col-lg-3'>
                  <div className='input-group'>
                    <span className='input-group-text'>Year</span>
                    <input
                      type='number'
                      className='form-control'
                      id='filterYear'
                      min='1600'
                      max={2023}
                      maxLength='250'
                      onChange={(e) => setSearchParams({ ...searchParams, y: e.target.value })}
                      value={searchParams['y']}
                    />
                  </div>
                </div>

                <div className='col-lg-3'>
                  <div className='input-group'>
                    <span className='input-group-text'>Type</span>
                    <select className='form-control form-select' id='typeFilter' onChange={(e) => setSearchParams({ ...searchParams, type: e.target.value })} value={searchParams['type']}>
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
