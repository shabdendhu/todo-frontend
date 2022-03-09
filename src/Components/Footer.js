import { HomeFilled, PlusCircleFilled, SettingFilled } from "@ant-design/icons";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  const history = useHistory();

  const handelChangePage = (url) => {
    history.push(url);
  };
  return (
    <div className="doc__menu">
      <HomeFilled
        onClick={() => {
          handelChangePage("/");
        }}
        style={{ color: "#9eddff" }}
      />
      <PlusCircleFilled
        onClick={() => {
          handelChangePage("/add-task");
        }}
        style={{ color: "#f9dc4b", fontSize: "40px" }}
      />
      <SettingFilled style={{ color: "white" }} />
    </div>
  );
};

export default Footer;
