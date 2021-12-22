import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { AuthProvider } from "./contexts/AuthContext";
import AuthGuard from "./components/Common/AuthGuard";
import UnAuthGuard from "./components/Common/UnAuthGuard";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import Inspiration from "./components/Inspiration/Inspiration";
import Profile from "./components/Profile/Profile";
import ProfileEdit from "./components/Profile/ProfileEdit/ProfileEdit.js";
import DesignCreation from "./components/DesignCreation/DesignCreation";
import DesignEdit from "./components/DesignEdit/DesignEdit";
import DesignDetails from "./components/DesignDetails/DesignDetails";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/inspiration" element={<Inspiration />}></Route>
          <Route path="/details/:designId" element={<DesignDetails />}></Route>
          <Route path="*" element={<NotFound />}></Route>

          <Route element={<UnAuthGuard />}>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Route>

          <Route element={<AuthGuard />}>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/profile-edit" element={<ProfileEdit />}></Route>
            <Route path="/logout" element={<Logout />}></Route>
            <Route path="/create" element={<DesignCreation />}></Route>
            <Route path="/edit/:designId" element={<DesignEdit />}></Route>
          </Route>
        </Routes>

        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
