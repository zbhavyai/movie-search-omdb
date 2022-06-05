import React from 'react';
import { useFetch } from './useFetch';
// import axios from 'axios';
import { MovieCard } from './MovieCard';

export const Movies = (props) => {
  // api key is defined in file .env.development
  const apiKey = process.env.REACT_APP_OMDB_API_KEY;

  const url = 'https://www.omdbapi.com/?apikey=' + apiKey;

  //   let thisurl = url + '&s=' + props.movieTitle;
  let thisurl = url + '&s=ice';

  const { data } = useFetch(thisurl);

  return (
    <React.Fragment>
      {data['Response'] !== 'True' ? (
        <div className='card shadow mt-4'>
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
