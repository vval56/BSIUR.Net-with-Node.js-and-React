import React from 'react';

const PostItem = ({ post }) => {
  return (
    <div className="post-item">
      <p>{post.content}</p>
      <div className="post-footer">
        <span>{new Date(post.createdAt).toLocaleString()}</span>
        <span>Лайки: {post.likes}</span>
      </div>
    </div>
  );
};

export default PostItem;
