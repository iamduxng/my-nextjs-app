import React, { useRef } from 'react';
import Router from 'next/router';

const Home = (props) => {
  const searchInput = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    let value = searchInput.current.value;

    if(!value) {
      alert('Please enter a keyword!');
    } else {
      Router.push({
        pathname: '/posts',
      });
    }
  }

  return (
    <section className="page-section h-screen">
      <form onSubmit={onSubmit} className="search-form">
        <input ref={searchInput} className="search-input" type="text" placeholder="Enter a keyword"/>
        <button className="search-btn" type="submit">Search</button>
      </form>
    </section>
  )
}

export default Home;
