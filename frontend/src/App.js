import logo from "./logo.svg";
import "./App.css";

import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import { Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header>
        <ul>
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/about">About</Link>
          </li>
        </ul>
      </header>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
