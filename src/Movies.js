import React from 'react';
import MovieCard from './MovieCard';
import PageNum from './PageNum';
import { useFetch } from './useFetch';

const Movies = (props) => {
  // api key is defined in file .env.development
  const apiKey = process.env.REACT_APP_OMDB_API_KEY;

  let url = 'https://www.omdbapi.com/?apikey=' + apiKey;

  let isSearch = false;

  if (props['searchTerm']['title'] !== undefined && props['searchTerm']['title'] !== '') {
    url += '&s=' + props['searchTerm']['title'];
    isSearch = true;
  } else {
    isSearch = false;
  }

  url = props['searchTerm']['type'] === undefined || props['searchTerm']['type'] === '' ? url : url + '&type=' + props['searchTerm']['type'];
  url = props['searchTerm']['year'] === undefined || props['searchTerm']['year'] === '' ? url : url + '&y=' + props['searchTerm']['year'];
  url = props['searchTerm']['page'] === undefined || props['searchTerm']['page'] === '' ? url : url + '&page=' + props['searchTerm']['page'];

  const { data } = useFetch(url);

  return (
    <React.Fragment>
      <div className='row'>
        <div className='col-12' style={{ paddingLeft: '15%', paddingRight: '15%' }}>
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
        </div>
      </div>

      <div className='row'>
        <div className='col-12' style={{ paddingLeft: '15%', paddingRight: '15%' }}>
          <PageNum setSearchTerm={props['setSearchTerm']} searchTerm={props['searchTerm']} totalResults={data['totalResults']} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Movies;
