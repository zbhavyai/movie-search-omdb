import React from 'react';
import MovieCard from './MovieCard';
import { useFetch } from './useFetch';

const Movies = (props) => {
  // api key is defined in file .env.development
  const apiKey = process.env.REACT_APP_OMDB_API_KEY;

  let url = 'https://www.omdbapi.com/?apikey=' + apiKey;

  let isSearch = false;

  if (props['title'] !== undefined && props['title'] !== '') {
    url += '&s=' + props['title'];
    isSearch = true;
  } else {
    isSearch = false;
  }

  url = props['type'] === undefined || props['type'] === '' ? url : url + '&type=' + props['type'];
  url = props['year'] === undefined || props['year'] === '' ? url : url + '&y=' + props['year'];

  console.log(url);

  const { data } = useFetch(url);

  return (
    <React.Fragment>
      {isSearch === false ? (
        <div className='card mt-4'>
          <div className='card-body'>
            <div className='text-secondary pt-2 text-centerr'>Hit search to get some results</div>
          </div>
        </div>
      ) : data['Response'] !== 'True' ? (
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
    </React.Fragment>
  );
};

export default Movies;
