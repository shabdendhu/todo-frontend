import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { API } from "../services/api.service";
import "./list.css";
const TaskCard = ({ data }) => {
  const colorList = ["#9eddff", "#f9dc4b", "#ffb2e9"];
  const color = colorList[Math.floor(Math.random() * colorList.length)];
  const priorityColor = {
    heigh: "red",
    normal: "lime",
    low: "yellow",
  };
  return (
    <div  style={{ background: color }} className="task__card">
      <div
        className="status__bar"
        style={{ background: priorityColor[data.priority] }}
      />
      <div className="remaining_time">{data.priority.toUpperCase()}</div>
      <div className="task__name">{data.taskName}</div>
      <div className="time_range">
        {data.date} ({data.time})
      </div>
    </div>
  );
};
const Lists = () => {
  const [taskLists, setTaskLists] = useState([]);
  const getAllTaskLists = async () => {
    const { status, message, data } = await API.getAllTasks();
    if (status) {
      setTaskLists(data);
    }
  };
  useEffect(() => {
    getAllTaskLists();
  }, []);

  return (
    <div className="list__container">
      <div className="list__title">To Do</div>
      {taskLists.map((item, index) => (
        <TaskCard key={index} data={item} />
      ))}
    </div>
  );
};

export default Lists;
