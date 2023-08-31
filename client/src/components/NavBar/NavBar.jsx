import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {
  function loaderCountry() {
    window.location.reload()
  }

  return (
    <div className={style.mainContainer}>
      <Link to="/form" className={style.add_activity}>
        Add your activity
      </Link>
      <button onClick={loaderCountry} className={style.all_countries}>
        All countries
      </button>
      <div>
        <SearchBar />
      </div>
    </div>
  );
};

export default NavBar;