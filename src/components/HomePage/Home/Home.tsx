import Render from "./RenderHome/Render";
import { useAppDispatch } from "../../../redux/store/store";
import { filtered, postVideo } from "../../../redux/tools/youTubeSlice";
import Modal from "../Modal/Modal";
import scss from "./RenderHome/Home.module.scss";

import React, { useState } from "react";

const Home = () => {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  const dispatch = useAppDispatch();

  const postTodo = () => {
    const newData = {
      name: value,
      link: value2,
      type: value3,
    };

    dispatch(postVideo(newData));
  };

  const handleFind = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(filtered(e.target.value));
  };

  return (
    <div className={scss.mainDiv}>
      <div>
        <select onChange={(e) => handleFind(e)}>
          <option value="all">all</option>
          <option value="music">music</option>
          <option value="film">film</option>
          <option value="english">english</option>
          <option>rep</option>
          <option value="animation">animation</option>
        </select>
        <Modal isOpen={modal} closeModal={closeModal}>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <input
            type="text"
            value={value2}
            onChange={(e) => setValue2(e.target.value)}
          />
          <select value={value3} onChange={(e) => setValue3(e.target.value)}>
            <option value="all">all</option>
            <option value="music">music</option>
            <option value="film">film</option>
            <option value="english">english</option>
            <option>rep</option>
            <option value="animation">animation</option>
          </select>
          <button
            onClick={() => {
              postTodo();
              closeModal();
            }}
          >
            загрузить
          </button>
        </Modal>
      </div>
      <Render />
      <button className={scss.button} onClick={openModal}>
        +
      </button>
    </div>
  );
};

export default Home;
