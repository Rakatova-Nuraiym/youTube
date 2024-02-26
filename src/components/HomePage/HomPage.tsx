import Home from "./Home/Home";
import VideoComponets from "./Home/RenderHome/video/VideoComponets";
import scss from "./homePage.module.scss";
import { Routes, Route } from "react-router-dom";

const HomPage = () => {
  return (
    <div className={scss.HomePage}>
      <div className="container">
        <div className={scss.content}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/home/:id" element={<VideoComponets />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default HomPage;
