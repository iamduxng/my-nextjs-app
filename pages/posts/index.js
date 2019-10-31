import React from 'react';
import PostsGrid from '../../components/PostsGrid';
import fetch from 'isomorphic-unfetch';

const Posts = (props) => {
  return (
    <section className="page-section h-full">
      <PostsGrid posts={props.posts}/>
    </section>
  )
}

Posts.getInitialProps = async function() {
  const res = await fetch('./api/posts');
  const data = await res.json();

  return {
    posts: data
  };
}

export default Posts;