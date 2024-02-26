import scss from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          <img
            src="https://www.shutterstock.com/image-vector/youtube-vector-icon-social-media-260nw-2312131313.jpg"
            alt=""
          />
          <a href="https://www.youtube.com/">YouTube</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
