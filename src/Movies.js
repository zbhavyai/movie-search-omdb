import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from './Header';
import MovieCard from './MovieCard';
import PageNum from './PageNum';
import SearchBar from './SearchBar';

const Movies = () => {
  // api key is defined in file .env.development
  const apiKey = process.env.REACT_APP_OMDB_API_KEY;

  let url = 'https://www.omdbapi.com/?apikey=' + apiKey;

  const [data, setData] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  const searchTitle = searchParams.get('s');
  const searchType = searchParams.get('type');
  const searchYear = searchParams.get('y');
  const resultpage = searchParams.get('page');

  url += checkString(searchTitle) ? '&s=' + searchTitle : '';
  url += checkString(searchType) ? '&type=' + searchType : '';
  url += checkString(searchYear) ? '&y=' + searchYear : '';
  url += checkString(resultpage) ? '&page=' + resultpage : '';

  useEffect(() => {
    console.log('Hit url =', url);

    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, [url]);

  return (
    <React.Fragment>
      <Header />

      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12' style={{ paddingLeft: '20%', paddingRight: '20%' }}>
            <SearchBar />
          </div>
        </div>

        <div className='row'>
          <div className='col-12' style={{ paddingLeft: '15%', paddingRight: '15%' }}>
            {data['Response'] !== 'True' ? (
              <div className='card mt-4'>
                <div className='card-body'>
                  <div className='text-secondary pt-2 text-centerr'>{data['Error']}</div>
                </div>
              </div>
            ) : (
              <div className='row p-5'>
                {data['Search']?.map((dataItem) => {
                  return <MovieCard key={dataItem['imdbID']} {...dataItem} />;
                })}
              </div>
            )}
          </div>
        </div>

        <div className='row'>
          <div className='col-12' style={{ paddingLeft: '15%', paddingRight: '15%' }}>
            <PageNum setSearchParams={setSearchParams} totalResults={data['totalResults']} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

function checkString(x) {
  if (x === undefined || x === '' || x === null) {
    return false;
  }

  return true;
}

export default Movies;
