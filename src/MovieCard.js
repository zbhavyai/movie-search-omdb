import React from 'react';

const MovieCard = ({ Poster: poster, Title: title, Year: year, Type: type }) => {
  let defaultPoster = `${process.env.PUBLIC_URL + '/no-poster.jpg'}`;
  let brokenPoster = `${process.env.PUBLIC_URL + '/no-poster.jpg'}`;

  // overwrite poster if 'N/A'
  poster = String(poster).startsWith('http') ? poster : defaultPoster;

  return (
    <div className='col-md-3 col-sm-6 d-flex justify-content-center p-4'>
      <div className='card custom-card darker-background info-overlay-wrapper'>
        <img
          className='card-img-top img-stretch'
          src={poster}
          alt='Movie poster'
          onError={(e) => {
            e.target.src = brokenPoster;
          }}
        />
        <figcaption className='card-body info-overlay text-center overflow-hidden'>
          <h4 className='card-title text-white my-1 overflowing-text'>{title}</h4>
          <h6 className='card-text text-white text-center py-3'>{year}</h6>
          <button type='button' className='btn btn-sm btn-warning'>
            {type}
          </button>
        </figcaption>
      </div>
    </div>
  );
};

export default MovieCard;
