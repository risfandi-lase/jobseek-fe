import { useState } from "react";
import Navbar from "/src/components/navbar/navbar";
import Main from "/src/components/main/main";


export default function Home() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  function updateTitle(newTitle) {
    setTitle(newTitle);
  }

  function updateLocation(newLocation) {
    setLocation(newLocation);
  }

  return (
    <>
      <Navbar
        updateLocation={updateLocation}
        updateTitle={updateTitle}
        title={title}
        location={location}
      />
      <Main
        title={title}
        location={location}
        setLocation={setLocation}
        setTitle={setTitle}
      />
    </>
  );
}
