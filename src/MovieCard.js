import React from 'react';

const MovieCard = ({ Poster: poster, Title: title, Year: year }) => {
  let defaultPoster = `${process.env.PUBLIC_URL + '/no-poster.jpg'}`;

  // overwrite poster if 'N/A'
  poster = String(poster).startsWith('http') ? poster : defaultPoster;

  return (
    <div className='col-md-3 col-sm-6 p-3'>
      <div className='card' style={{ width: '15rem' }}>
        <img className='card-img-top' src={poster} alt='Movie poster' />
        <div className='card-body'>
          <h6
            className='card-title my-1'
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
          <p className='card-text'>{year}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
