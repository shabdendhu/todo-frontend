import { ApiFilled, CloseCircleFilled } from "@ant-design/icons";
import { Dialog, Slide } from "@mui/material";
import { DatePicker, Form, Input, Select, TimePicker } from "antd";
import React from "react";
import { API } from "../services/api.service";
import moment from "moment";
import "./addtask.css";
import { useHistory } from "react-router-dom";

const { RangePicker } = DatePicker;
const { Item, useForm } = Form;
const { Option } = Select;
const AddTask = () => {
  const [form] = useForm();
  const history=useHistory()
  const priorityArr = ["Heigh", "Normal", "Low"];
  const addTask = () => {
    form.validateFields().then(async (value) => {
      const newTask = {
        taskName: value.taskName,
        description: value.description,
        date: moment(value.date).format("YYYY-MM-DD"),
        time: moment(value.time).format("HH-MM a"),
        priority: value.priority.value.toLowerCase(),
      };
      const addRes = await API.addNewTask(newTask);
      console.log(newTask, addRes);
      if(addRes.status){
        history.push('/')
      }
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
        <span className="labels">Date</span>
        <Item
          name="date"
          rules={[{ required: true, message: "Invalid startDate" }]}
        >
          <DatePicker
            style={{ background: "#9eddff", color: "black", width: "100%" }}
            format="YYYY-MM-DD"
          />
        </Item>
        <span className="labels">Time</span>
        <Item name="time" rules={[{ required: true, message: "Invalid time" }]}>
          <TimePicker
            style={{ background: "#9eddff", color: "black", width: "100%" }}
            use12Hours
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
