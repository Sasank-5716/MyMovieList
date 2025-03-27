import "./css/app.css";
import Favorites from "./pages/Favourites";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";

function App() {
  return (
    <>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </>


  );
}

export default App;