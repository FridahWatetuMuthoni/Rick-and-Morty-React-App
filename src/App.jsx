import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Home";
import Episode from "./pages/Episode";
import Location from "./pages/Location";
import Card from "./components/Cards/Card";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/:id" element={<Card />} />
        <Route path="/episodes" element={<Episode />} />
        <Route path="/episodes/:id" element={<Card />} />
        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<Card />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
