import React from "react";
import "./TeslaAccount.scss";
import Menu from "~/components/Menu";
import { Link, useNavigate } from "react-router-dom";
import { CloseOutlined, MenuOutlined } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "~/features/userSlice";
import Car from "~/components/Car";
import { signOut } from "firebase/auth";
import { auth } from "~/firebase";
import { logout } from "~/features/userSlice";

const TeslaAccount = ({ isMenuOpened, setIsMenuOpened }) => {
  const user = useSelector(selectUser);
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(logout())
        navigate('/')
        
      })
      .catch((error) => {});
  };
  return (
    <div className="teslaAccount">
      <div className="teslaAccount__header">
        <div className="teslaAccount__logo">
          <Link to="/">
            <img
              className="header__logoImg"
              src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
              alt=""
            />
          </Link>
        </div>
        <div className="teslaAccount__links">
          <Link to="/teslaaccount">Model S</Link>
          <Link to="/teslaaccount">Model 3</Link>
          <Link to="/teslaaccount">Model X</Link>
          <Link to="/teslaaccount">Model Y</Link>
          <Link to="/teslaaccount">Solar Roof</Link>
          <Link to="/teslaaccount">Solar Panels</Link>
          <Link to="/teslaaccount">Shop</Link>
          <Link onClick={handleLogout}>Log out</Link>
          <div
            className="teslaAccount__menu"
            onClick={() => setIsMenuOpened(!isMenuOpened)}
          >
            {isMenuOpened ? (
              <CloseOutlined className="teslaAccount__closeMenu" />
            ) : (
              <MenuOutlined />
            )}
          </div>
        </div>
        {isMenuOpened && <Menu />}
      </div>
      <div className="teslaAccount__info">
        <div className="teslaAccount__person">
          <h4>{user?.displayName + "'s"}</h4>
        </div>
        <div className="teslaAccount__infoRight">
          <Link>Home</Link>
          <Link>Account</Link>
          <Link>History</Link>
          <Link onClick={handleLogout}>Sign out</Link>
        </div>
      </div>
      <div className="teslaAccount__car">
        <Car
          imgSrc="https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-models@2x.jpg?20170815"
          model="model s"
          testDrive
        />
        <Car
          imgSrc="https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-modelx@2x.jpg?20170815"
          model="model x"
        />
      </div>
    </div>
  );
};

export default TeslaAccount;
