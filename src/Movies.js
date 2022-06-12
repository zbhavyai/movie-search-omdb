import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import MovieCard from './MovieCard';
import PageNum from './PageNum';
import SearchBar from './SearchBar';

const Movies = () => {
  // api key is defined in file .env.development
  const apiKey = process.env.REACT_APP_OMDB_API_KEY;

  let url = 'https://www.omdbapi.com/?apikey=' + apiKey;

  const [data, setData] = useState({});
  const [searchParams] = useSearchParams();

  const searchTitle = searchParams.get('s');
  const searchType = searchParams.get('type');
  const searchYear = searchParams.get('y');
  const resultpage = searchParams.get('page');

  url += checkString(searchTitle) ? '&s=' + searchTitle : '';
  url += checkType(searchType) ? '&type=' + searchType : '';
  url += checkNumber(searchYear) ? '&y=' + searchYear : '';
  url += checkNumber(resultpage) ? '&page=' + resultpage : '';

  useEffect(() => {
    console.log('Hit url =', url);

    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, [url]);

  return (
    <React.Fragment>
      <Header />
      <SearchBar />

      <div className='darker-background'>
        <div className='container custom-padding'>
          <div className='row'>
            <div className='col-12'>
              {data['Response'] !== 'True' ? (
                <div className='card mt-4'>
                  <div className='card-body'>
                    <div className='text-secondary pt-2 text-centerr'>{data['Error']}</div>
                  </div>
                </div>
              ) : (
                <div className='row pb-5'>
                  {data['Search']?.map((dataItem) => {
                    return <MovieCard key={dataItem['imdbID']} {...dataItem} />;
                  })}
                </div>
              )}
            </div>
          </div>
        </div>

        <PageNum totalResults={data['totalResults']} />
      </div>

      <Footer />
    </React.Fragment>
  );
};

function checkString(x) {
  if (x === undefined || x === '' || x === null) {
    return false;
  }

  return true;
}

function checkType(x) {
  if (checkString(x)) {
    if (x === 'movie' || x === 'series' || x === 'episode') {
      return true;
    }
  }

  return false;
}

function checkNumber(x) {
  if (checkString(x)) {
    return true;
  }

  return false;
}

export default Movies;
