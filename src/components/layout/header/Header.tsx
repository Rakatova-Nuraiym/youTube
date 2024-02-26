import { Link } from "react-router-dom";
import scss from "./header.module.scss";

const Header = () => {
  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <nav>
            <ul>
              <li>
                <img
                  src="https://www.pikpng.com/pngl/b/183-1830659_white-youtube-icon-transparent-background-youtube-logo-white.png"
                  alt=""
                />
              </li>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="#">shorts</Link>
              </li>
              <li>
                <Link to="#">подписчики</Link>
              </li>
              <li>
                <Link to="#">вы</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
