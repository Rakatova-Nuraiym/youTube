import Header from "./header/Header";
import Footer from "./footer/Footer";
import scss from "./layout.module.scss";
import HomPage from "../HomePage/HomPage";

const Layout = () => {
  return (
    <div className={scss.Layout}>
      <Header />
      <main>
        <HomPage />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
