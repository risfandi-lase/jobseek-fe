import style from "./Header.module.css";
import logo from "/src/assets/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [active, setActive] = useState("home");

  function handleClickMenu(menuName) {
    setActive(menuName);
  }

  return (
    <div className={style.container}>
    <div className={style.heading}>
      <div className={style["left-side"]}>
        <div className={style.logo}>
          <img src={logo} alt="" />
          <p className={style.title}>JobSeek</p>
        </div>
        <Link
          to="/"
          className={active === "home" ? style.active : ""}
          onClick={() => handleClickMenu("home")}
        >
          Home
        </Link>
        <Link
          to="/profile"
          className={active === "profile" ? style.active : ""}
          onClick={() => handleClickMenu("profile")}
        >
          Profile
        </Link>
        <a href="">Career Advice</a>
        <a href="">Explore Companies</a>
        <Link to="/bookmark"
          className={active === "bookmark" ? style.active : ""}
          onClick={() => handleClickMenu("bookmark")}>Bookmark</Link>
        <Link
          to="/new-job"
          className={active === "new-job" ? style.active : ""}
          onClick={() => handleClickMenu("new-job")}
        >
          New Job
        </Link>{" "}
      </div>

      <select className={style["right-side"]}>
        <option value="englis">English</option>
        <option value="bahasa">Bahasa</option>
      </select>
        <select className={`${style['right-side']} ${style.user}`}>        
        <option value="risfandi">Risfandi</option>
        <option value="logout">Log out</option>
      </select>
    </div>
    </div>
  );
}
