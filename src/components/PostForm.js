import React, { useState } from 'react';

const PostForm = ({ onPostSubmit }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim() === '') return;

    const newPost = {
      id: Date.now().toString(),
      userId: "current-user-id",
      content: content,
      createdAt: new Date().toISOString(),
      likes: 0,
      comments: []
    };

    // Вызываем onPostSubmit, переданный из родительского компонента
    onPostSubmit(newPost);
    setContent(''); // Очищаем форму
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Что у вас нового?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows="4"
      />
      <button type="submit">Опубликовать</button>
    </form>
  );
};

export default PostForm;
