import React from 'react';
import { useSearchParams } from 'react-router-dom';

const PageNum = (props) => {
  const n = props['totalResults'] === undefined ? 1 : Math.ceil(props['totalResults'] / 10);

  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = searchParams.get('page');

  const handleUpdatePage = (e) => {
    searchParams.set('page', e.target.value);
    setSearchParams(searchParams);
  };

  return (
    <nav aria-label='page navigation' className='pt-4'>
      <ul className='pagination justify-content-center'>
        {[...Array(n)].map((e, i) => {
          return (
            <li className='page-item' key={i}>
              <button className='page-link' onClick={handleUpdatePage} value={i + 1}>
                {i + 1}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default PageNum;
