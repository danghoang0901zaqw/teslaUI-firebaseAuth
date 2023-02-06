import { LanguageOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "~/firebase";

import ButtonPrimary from "~/components/ButtonPrimary";
import ButtonSecondary from "~/components/ButtonSecondary";

import "./Login.scss";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "~/features/userSlice";

const Login = () => {
  const user=useSelector(selectUser)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate=useNavigate()

  const handleSingIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch(
          login({
            uid:userCredential.user.uid,
            email: userCredential.email,
            displayName:userCredential.user.displayName,
          })
        );
        navigate('/teslaaccount')
      })
      .catch((error) => {
        alert(error.message)
      });
  };
  return (
    <div className="login">
      <div className="login__header">
        <div className="login__logo">
          <Link to="/">
            <img
              src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
              alt=""
            />
          </Link>
        </div>
        <div className="login__language">
          <LanguageOutlined />
          <span>en-US</span>
        </div>
      </div>
      <div className="login__info">
        <h1>Sign In</h1>
        <form className="login__form">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
          />
          <label htmlFor="password">Password </label>
          <input
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <ButtonPrimary name="Sign in" type="submit" onClick={handleSingIn} />
        </form>
        <div className="login__divider">
          <hr /> <span>OR</span> <hr />
        </div>
        <Link to="/register">
          <ButtonSecondary name="Create Account" />
        </Link>
      </div>
    </div>
  );
};

export default Login;
