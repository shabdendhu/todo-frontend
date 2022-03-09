import React from "react";
import "./topcalender.css";
const DateChip = ({ data }) => {
  const { today, day, date } = data;
  //   console.log(data);
  return (
    <span className={today ? "datechip today__datechip" : "datechip"}>
      <span>{date}</span>
      <span>{day}</span>
    </span>
  );
};
const TopCalender = () => {
  const date = [
    { date: 1, day: "Sun", today: false },
    { date: 2, day: "Mon", today: false },
    { date: 3, day: "Tue", today: true },
    { date: 4, day: "Wed", today: false },
    { date: 5, day: "Thu", today: false },
    { date: 6, day: "Fri", today: false },
    { date: 7, day: "Sat", today: false },
    { date: 8, day: "Sun", today: false },
    { date: 9, day: "Mon", today: false },
    { date: 10, day: "Tue", today: false },
    { date: 11, day: "Wed", today: false },
    { date: 12, day: "Thu", today: false },
    { date: 13, day: "Fri", today: false },
  ];
  return (
    <div className="datechip__container app__body">
      {date.map((e, i) => (
        <DateChip key={i} data={e} />
      ))}
    </div>
  );
};

export default TopCalender;
