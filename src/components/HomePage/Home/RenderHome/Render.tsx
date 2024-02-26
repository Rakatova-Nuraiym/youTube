import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/store/store";
import {
  deleteVideo,
  editVideo,
  // filtered,
  getVideo,
} from "../../../../redux/tools/youTubeSlice";
import scss from "./render.module.scss";

import { todo } from "../../../../type";
import { Link } from "react-router-dom";


const Render = () => {
  const dispatch = useAppDispatch();
  const { todo, type } = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(getVideo());
  }, [dispatch]);

  const deleteFunc = (_id: number) => {
    dispatch(deleteVideo(_id));
  };

  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [edit, setEdit] = useState<number | null>(null);

  const editFunc = (item: todo) => {
    setValue(item.name);
    setValue2(item.link);
    setValue3(item.type);
    setEdit(item._id);
  };

  const update = (_id: number) => {
    const newData = {
      name: value,
      link: value2,
      type: value3,
    };
    dispatch(editVideo({ newData, _id }));
    setEdit(null);
  };
  const flitered =
    type === "all" ? todo : todo.filter((item) => item.type === type);
  return (
    <div className={scss.youTube}>
      <div className={scss.card}>
        {flitered.map((item) => (
          <div key={item._id} className={scss.todo}>
            {edit === item._id ? (
              <>
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
                <select
                  value={value3}
                  onChange={(e) => setValue3(e.target.value)}
                >
                  <option value="all">all</option>
                  <option value="music">music</option>
                  <option value="film">film</option>
                  <option value="english">english</option>
                  <option>rep</option>
                  <option value="animation">animation</option>
                </select>
                <button onClick={() => update(item._id)}>update</button>
              </>
            ) : (
              <>
                <Link to={`/home/${item._id}`}>
                  <iframe
                    className={scss.img}
                    src={item.link}
                    title={item.name}
                  />
                  <h1>{item.name}</h1>
                  <p>{item.type}</p>
                </Link>

                <button onClick={() => deleteFunc(item._id)}>delete</button>
                <button onClick={() => editFunc(item)}>edit</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Render;
