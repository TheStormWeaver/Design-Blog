import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import Inspiration from "./components/Inspiration/Inspiration";
import DesignCreation from "./components/DesignCreation/DesignCreation";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/inspiration" element={<Inspiration />}></Route>
        <Route path="/create" element={<DesignCreation />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
