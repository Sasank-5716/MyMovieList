import "./css/App.css";
import Favorites from "./pages/Favourites";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import { MovieProvider } from "./contexts/MovieContext";

function App() {
  return (
    <MovieProvider>
    <NavBar />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/favorites" element={<Favorites/>} />
      </Routes>
    </main>
  </MovieProvider>
);
}

export default App;