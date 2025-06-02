import { useState } from "react";
import style from "./Navbar.module.css";

export default function Navbar({ updateLocation, updateTitle, title, location }) {
const [searchInput, setSearchInput] = useState('')

  // function handleSearchLocation(e) {
  //   e.preventDefault();
  //   setSearchInput({newLocation: searchInput})
  //   console.log("ff");
  // }

  // function handleLocationInputChange(e) {
  //   console.log(e.target.value)
  //   updateLocation(e.target.value);
  // }
    function handleSubmit(){
      updateLocation(searchInput)
    }

  return (
    <>
      <div className={style["nav-box"]}>
        <div>
          <p>Position</p>
          <input
            type="text"
            value={title}
            onChange={(e) => updateTitle(e.target.value)}
          />
        </div>
        <div>
          <p>Where</p>
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button onClick={handleSubmit}>SEEK</button>
        </div>
      </div>
    </>
  );
}
