import React, { useState } from 'react';
import PostForm from '../components/PostForm'; // Импортируем форму создания поста
import PostItem from '../components/PostItem'; // Импортируем компонент отображения поста

const Home = () => {

    const [posts, setPosts] = useState([]);

  // Метод для обработки отправки поста на сервер
  const handlePostSubmit = async (newPost) => {
    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });

      if (!response.ok) {
        throw new Error('Не удалось опубликовать пост');
      }

      const createdPost = await response.json(); // Получаем ответ от сервера
      setPosts([createdPost, ...posts]); // Обновляем состояние с новым постом
    } catch (error) {
      console.error('Ошибка при публикации:', error);
    }
  };
  return (<section className = "section-top">
        <div className="wrapper-inner">
            <div className="name-project">
                <button id="logo">
                    <img src="StandartImages/unnamed.jpg" alt="Bsuir-logo" width = "60"></img>
                </button>
                <button id ="name-button" className = "name-button">
                    BSUIR.Net
                </button>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Поиск"></input>
            </div>
            <div className="notification-button">
                <button id = "notifications" className = "notifications">
                    <i className="fa fa-bell" aria-hidden="true"></i>
                </button>
                <div id="notification-panel" className="notification-panel">
                    У вас пока нет уведомлений
                </div>
            </div>
                <PostForm onPostSubmit={handlePostSubmit} /> {/* Форма для создания поста */}
                <div className="posts-list">
                    {posts.map((post) => (
                        <PostItem key={post.id} post={post} />
                ))}
            </div>
        </div>
    </section>);
};

export default Home;
