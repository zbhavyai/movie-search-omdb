import React from 'react';

const MovieCard = ({ Poster: poster, Title: title, Year: year, Type: type }) => {
  let defaultPoster = `${process.env.PUBLIC_URL + '/no-poster.jpg'}`;

  // overwrite poster if 'N/A'
  poster = String(poster).startsWith('http') ? poster : defaultPoster;

  return (
    <div className='col-md-3 col-sm-6 d-flex justify-content-center p-3'>
      <div className='card card-max-width'>
        <img className='card-img-top' src={poster} alt='Movie poster' />
        <div className='card-body darker-background'>
          <h6
            className='card-title text-white my-1'
            style={{
              color: '#000000',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: '1',
              lineClamp: '1',
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {title}
          </h6>
          <p className='card-text text-white'>{year}</p>
          <button type='button' className='btn btn-sm btn-secondary'>
            {type}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
