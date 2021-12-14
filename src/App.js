import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { AuthContext } from "./contexts/AuthContext";
import useLocalStorage from "./hooks/useLocalStorage";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import Inspiration from "./components/Inspiration/Inspiration";
import DesignCreation from "./components/DesignCreation/DesignCreation";
import DesignEdit from "./components/DesignEdit/DesignEdit";
import DesignDetails from "./components/DesignDetails/DesignDetails";

function App() {
  const [user, setUser] = useLocalStorage("user", {
    _id: "",
    email: "",
    accessToken: "",
  });

  const loginUser = (authData) => {
    setUser(authData);
  };

  function logoutUser() {
    setUser({
      _id: "",
      email: "",
      accessToken: "",
    });
  }

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
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
          <Route path="/details/:designId" element={<DesignDetails />}></Route>
          <Route path="/edit/:designId" element={<DesignEdit />}></Route>
        </Routes>

        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
