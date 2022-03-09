import React from "react";
import "./list.css";
const TaskCard = () => {
  const colorList = ["#9eddff", "#f9dc4b", "#ffb2e9"];
  const color = colorList[Math.floor(Math.random() * colorList.length)];
  return (
    <div style={{ background: color }} className="task__card">
      <div className="status__bar" />
      <div className="remaining_time">30Days Left</div>
      <div className="task__name">UX For App</div>
      <div className="time_range">10.00am - 11.30pm</div>
    </div>
  );
};
const Lists = () => {
  return (
    <div className="list__container">
      <div className="list__title">To Do</div>
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
    </div>
  );
};

export default Lists;
