import React from 'react';

const PageNum = (props) => {
  const n = props['totalResults'] === undefined ? 1 : Math.ceil(props['totalResults'] / 10);

  const handleUpdatePage = (e) => {
    props.setSearchTerm({ ...props['searchTerm'], page: e.target.value });
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
