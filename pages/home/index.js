import React, { useState } from 'react';
import Router from 'next/router';

const Home = (props) => {
  const [keyword, setKeyword] = useState('');

  const onChange = (e) => {
    setKeyword(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    Router.push({
      pathname: '/posts',
      query: { search: keyword }
    });
  }

  return (
    <section className="page-section h-screen">
      <form onSubmit={onSubmit} className="search-form">
        <input className="search-input" type="text" placeholder="Enter a keyword" onChange={onChange}/>
        <button className="search-btn">Search</button>
      </form>
    </section>
  )
}

export default Home;
