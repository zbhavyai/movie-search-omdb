import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12' style={{ paddingLeft: '20%', paddingRight: '20%' }}>
            <SearchBar />
            {/* <div className='card mt-4'>
              <div className='card-body'>
                <div className='text-secondary pt-2 text-centerr'>Hit search to get some results</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
