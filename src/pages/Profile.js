import React from "react";

const Profile = () => {
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
            <div className="notification-button">
                <button id = "notifications" className = "notifications">
                    <i className="fa fa-bell" aria-hidden="true"></i>
                </button>
                <div id="notification-panel" className="notification-panel">
                    У вас пока нет уведомлений
                </div>
            </div>
        </div>
    </section>);
};

export default Profile;
