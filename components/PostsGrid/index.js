import React from 'react';
import Post from '../Post';

const PostsGrid = (props) => {
  return (
    <div className="posts-grid">
      {props.posts && props.posts.map((post,id) => (
        <Post key={`video-${id}`} post={post}/>
      ))}
    </div>
  )
}

export default PostsGrid;