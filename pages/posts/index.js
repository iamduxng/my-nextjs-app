import React from 'react';
import PostsGrid from '../../components/PostsGrid';
import fetch from 'isomorphic-unfetch';

const dev = process.env.NODE_ENV !== 'production';
export const server = dev ? 'http://localhost:3000' : 'https://my-next-app.com';

const Posts = (props) => {
  return (
    <section className="page-section h-full">
      <PostsGrid posts={props.posts}/>
    </section>
  )
}

Posts.getInitialProps = async function() {
  const res = await fetch(`${server}/api/posts`);
  const data = await res.json();

  return {
    posts: data
  };
}

export default Posts;