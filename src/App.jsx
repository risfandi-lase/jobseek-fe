import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewJob from "./pages/new-job/NewJob";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Bookmark from "./pages/bookmark/Bookmark";


export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-job" element={<NewJob />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/bookmark" element={<Bookmark />}/>
        
      </Routes>

    </Router>
  );
}
