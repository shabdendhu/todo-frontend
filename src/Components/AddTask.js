import { CloseCircleFilled } from "@ant-design/icons";
import { Dialog, Slide } from "@mui/material";
import { DatePicker, Form, Input, Select } from "antd";
import React from "react";
import "./addtask.css";

const { RangePicker } = DatePicker;
const { Item, useForm } = Form;
const { Option } = Select;
const AddTask = ({ open, setOpen }) => {
  const [form] = useForm();
  const priorityArr = ["Heigh", "Normal", "Low"];
  const addTask = () => {
    form.validateFields().then((value) => {
      console.log(value);
    });
  };
  return (
    <div className="app__body addtask__header">
      <Form form={form}>
        <span className="labels">Task Name</span>
        <Item
          name="taskName"
          rules={[{ required: true, message: "Invalid taskName!" }]}
        >
          <Input style={{ background: "#9eddff", color: "black" }} />
        </Item>
        <span className="labels">Description</span>
        <Item
          name="description"
          rules={[{ required: true, message: "Invalid description!" }]}
        >
          <Input style={{ background: "#f9dc4b", color: "black" }} />
        </Item>
        <span className="labels">Time Limit</span>
        <Item
          name="timeLimit"
          rules={[{ required: true, message: "Invalid timeLimit" }]}
        >
          <DatePicker
            style={{ background: "#9eddff", color: "black", width: "100%" }}
            showTime={{ format: "HH:mm" }}
            format="YYYY-MM-DD HH:mm"
          />
        </Item>
        <span className="labels">Time Limit</span>
        <Item
          name="timeLimit"
          rules={[{ required: true, message: "Invalid timeLimit" }]}
        >
          <DatePicker
            style={{ background: "#ffb2e9", color: "black", width: "100%" }}
            showTime={{ format: "HH:mm" }}
            format="YYYY-MM-DD HH:mm"
          />
        </Item>
        <span className="labels">Priority</span>
        <Item
          name="priority"
          rules={[{ required: true, message: "Invalid Priority!" }]}
        >
          <Select labelInValue>
            {priorityArr.map((e, i) => (
              <Option key={i} value={e}>
                {e}
              </Option>
            ))}
          </Select>
        </Item>
      </Form>
      <div className="btn__container">
        <button className="add__task__btn" onClick={addTask}>
          AddTask
        </button>
      </div>
    </div>
  );
};

export default AddTask;
