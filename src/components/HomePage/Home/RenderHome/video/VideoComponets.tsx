import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import scss from "./video.module.scss";
import axios from "axios";

import { useAppSelector } from "../../../../../redux/store/store";
import { todo } from "../../../../../type";

const VideoComponents = () => {
  const { id } = useParams();
  const [video, setVidoe] = useState<todo[]>([]);

  const todoList = useAppSelector((state) => state.todo);
  const url = `https://api.elchocrud.pro/api/v1/a1c772f8a537d4bf192a67189b5a87e0/youtube/${id}`;

  const getVidoe = async () => {
    try {
      const response = (await axios.get(url)).data;
      setVidoe([response]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getVidoe();
  }, []);

  return (
    <div className={scss.selfVideo}>
      {video.map((item) => (
        <div className={scss.miniVideo}>
          <h2>{item.name}</h2>
          <iframe className={scss.Video} src={item.link}></iframe>
        </div>
      ))}
      <div className={scss.rendered}>
        {todoList.map((item) => (
          <div key={item._id}>
            <Link to={`/home/${item._id}`}>
              <iframe className={scss.img} src={item.link} title={item.name} />
              <h1>{item.name}</h1>
              <p>{item.type}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoComponents;
