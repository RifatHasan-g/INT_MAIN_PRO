import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import AddUser from "./components/AddUser";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/AddUser" element={<AddUser />} />
      </Routes>
    </div>
  );
}

export default App;
