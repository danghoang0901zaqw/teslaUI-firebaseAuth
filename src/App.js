import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "~/pages/Home";
import "./App.css";
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import TeslaAccount from "./pages/TeslaAccount/TeslaAccount";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const user = useSelector(selectUser);
  const dispatch=useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login({
          uid:user.uid,
          email:user.email,
          displayName:user.displayName

        }))
      } else {
        dispatch(logout())
      }
    });
  }, [dispatch]);
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                isMenuOpened={isMenuOpened}
                setIsMenuOpened={setIsMenuOpened}
              />
            }
          />
          <Route
            path="/teslaaccount"
            element={
              <TeslaAccount
                isMenuOpened={isMenuOpened}
                setIsMenuOpened={setIsMenuOpened}
              />
            }
          />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
