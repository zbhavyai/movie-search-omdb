import React from 'react';
import Footer from './Footer';
import Header from './Header';
import SearchBar from './SearchBar';

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <SearchBar />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
