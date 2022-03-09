import React from "react";
import TopCalender from "./TopCalender";

const Header = () => {
  return (
    <div className="top_bar">
      <div className="header app__body">
        Your Tasks
        <img
          className="profile__photo"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
        />
      </div>
      <TopCalender />
    </div>
  );
};

export default Header;
