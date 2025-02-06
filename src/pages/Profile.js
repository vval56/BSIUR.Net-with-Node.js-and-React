import React from "react";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import Ads from "./profilePages/Ads.js";
import Grades from "./profilePages/RecordBook.js";
import Rating from "./profilePages/Rating.js";
import Study from "./profilePages/Study.js";
import Skip from "./profilePages/Skip.js";
import Group from "./profilePages/Group.js";
import Dormitory from "./profilePages/Dormitory.js";
import Encouragement from "./profilePages/Encouragement.js";
import Personal from "./profilePages/ProfilePersonal.js";

function Top() {
  return (
    <section className="section-top">
      <div className="wrapper-inner">
        <div className="name-project">
          <button id="logo">
            <img src="/StandartImages/unnamed.jpg" alt="Bsuir-logo" width="60" />
          </button>
          <button id="name-button" className="name-button">
            BSUIR.Net
          </button>
        </div>
        <div className="notification-button">
          <button id="notifications" className="notifications">
            <i className="fa fa-bell" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

const Profile = () => {
  const location = useLocation();

  // Флаг, который проверяет, находится ли пользователь в одном из разделов
  const isInsideSection =
    location.pathname !== "/profile/*" && location.pathname.startsWith("/profile");

  return (
    <>
      <Top />

      {/* Навигация скрывается, когда пользователь внутри любого раздела */}
      {!isInsideSection && (
        <section className="section-profile">
          <div className="wrapper-inner">
            <nav className = "field-enter">
                <div className="profile-buttons">
                    <Link to="/profile/ads">
                        <button className="nav-button">Объявления</button>
                    </Link>
                </div>
                <div className="profile-buttons">
                    <Link to="/profile/grades">
                        <button className="nav-button">Зачётка</button>
                    </Link>
                </div>
                <div className="profile-buttons">
                    <Link to="/profile/rating">
                        <button className="nav-button">Рейтинг</button>
                    </Link>
                </div>
                <div className="profile-buttons">
                    <Link to="/profile/study">
                        <button className="nav-button">Учёба</button>
                    </Link>
                </div>
                <div className="profile-buttons">
                    <Link to="/profile/skip">
                        <button className="nav-button">Пропуски</button>
                    </Link>
                </div>
                <div className="profile-buttons">
                    <Link to="/profile/group">
                        <button className="nav-button">Группа</button>
                    </Link>
                </div>
                <div className="profile-buttons">
                    <Link to="/profile/dormitory">
                        <button className="nav-button">Общежитие</button>
                    </Link>
                </div>
                <div className="profile-buttons">
                    <Link to="/profile/encouragement">
                        <button className="nav-button">Поощрения</button>
                    </Link>
                </div>
                <div className="profile-buttons">
                    <Link to="/profile/personal">
                        <button className="nav-button">Персональные данные</button>
                    </Link>
                </div>
            </nav>
          </div>
        </section>
      )}

      {/* Контейнер для изменяемого контента */}
      <div className="content">
        <Routes>
          <Route path="ads" element={<Ads />} />
          <Route path="grades" element={<Grades />} />
          <Route path="rating" element={<Rating />} />
          <Route path="study" element={<Study />} />
          <Route path="skip" element={<Skip />} />
          <Route path="group" element={<Group />} />
          <Route path="dormitory" element={<Dormitory />} />
          <Route path="encouragement" element={<Encouragement />} />
          <Route path="personal" element={<Personal />} />
        </Routes>
      </div>
    </>
  );
};

export default Profile;
