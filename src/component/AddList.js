import React, { useState, useRef, forwardRef } from "react";
import Category from "./Category";
import styled from "styled-components";
import {
  faPlus,
  faArrowRight,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddList(props) {
  const { todoListItem, setTodoListItem } = props;
  const [wrapState, setWrapState] = useState(false);
  const [todoInput, setTodoInput] = useState("");
  const [nextId, setNextId] = useState(todoListItem.length + 1);
  const [category, setCategory] = useState("기타");
  const inputRef = useRef();
  const [startDate, setStartDate] = useState(new Date());
  const wrapView = () => {
    setWrapState(!wrapState);
  };
  const onChange = (e) => {
    setTodoInput(e.target.value);
  };
  const addItem = () => {
    const nextList = todoListItem.concat({
      id: nextId,
      text: todoInput,
      category: category,
      isPined: false,
      checked: false,
      date: startDate,
    });
    setNextId(nextId + 1);
    todoInput && setTodoListItem(nextList);
    setTodoInput("");
    inputRef.current.focus();
  };
  const handleKey = (e) => {
    if (e.key == "Enter") {
      addItem();
    }
  };
  return (
    <>
      {wrapState && (
        <AddWrap>
          <Category setCategory={setCategory} />
          <input
            type="text"
            ref={inputRef}
            style={{
              width: "430px",
              height: "20px",
              lineHeight: "30px",
              padding: "6px 8px",
              transform: "translateY(-1px)",
            }}
            onChange={onChange}
            value={todoInput}
            placeholder="add a new task"
            onKeyDown={handleKey}
          />
          <button
            style={{
              width: "30px",
              height: "30px",
              background: "#fff",
              transform: "translate(-30px,0)",
              zIndex: "100",
            }}
            onClick={addItem}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
          <DatePicker
            dateFormat="MM/dd"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <span className="dateIcon">
            <FontAwesomeIcon icon={faCalendar} />
          </span>
        </AddWrap>
      )}
      <button
        style={{
          background: "#000",
          width: "35px",
          height: "35px",
          color: "#fff",
          borderRadius: "50%",
          position: "absolute",
          right: "20px",
          bottom: wrapState ? "75px" : "30px",
          transform: wrapState && "rotate(45deg)",
          transition: "all .4s",
        }}
        onClick={wrapView}
      >
        <FontAwesomeIcon icon={faPlus} style={{ fontSize: "1.2rem" }} />
      </button>
    </>
  );
}

const AddWrap = styled.div`
  animation: move 0.4s;
  position: absolute;
  left: 0;
  bottom: 0;
  background: #ebe5ab;
  width: 100%;
  height: 140px;
  padding-left: 30px;
  padding-top: 30px;
  box-sizing: border-box;
  & input:focus {
    outline: none;
  }
  & input {
    transform: translateY(-1px);
    background: #fff;
    color: #222;
    box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, 0.5);
  }
  & select {
    box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, 0.5);
  }
`;

export default AddList;
