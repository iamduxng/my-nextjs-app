import React from 'react';

const Post = (props) => {
  let post = props.post;
  const {snippet} = post;
  return (
    <div className="post w-1/2 sm-w-1/3 md:w-1/4">
      <div className="post-thumbnails">
        <img src={snippet.thumbnails} alt=''/>
      </div>
      <div className="post-title">
        {snippet.title}
      </div>
    </div>
  )
}

export default Post;