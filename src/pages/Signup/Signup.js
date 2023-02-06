import { LanguageOutlined } from "@material-ui/icons";
import React, { useState ,useRef} from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "~/firebase";
import { login } from "~/features/userSlice";

import ButtonPrimary from "~/components/ButtonPrimary";
import ButtonSecondary from "~/components/ButtonSecondary";
import "./Signup.scss";

import { useDispatch } from "react-redux";
const Signup = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const hanldeSignup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password,fName)
      .then((userCredential) => {
        updateProfile(userCredential, {
          displayName: userCredential.fName,
        }).then(() => {
          dispatch(
            login({
              uid: userCredential.user.uid,
              email: userCredential.email,
              displayName:userCredential.fName,
            })
          );
          navigate("/login");
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="signup">
      <div className="signup__header">
        <div className="signup__logo">
          <Link to="/">
            <img
              src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
              alt=""
            />
          </Link>
        </div>
        <div className="signup__language">
          <LanguageOutlined />
          <span>en-US</span>
        </div>
      </div>
      <div className="signup__info">
        <h1>Create Account</h1>
        <form className="signup__form">
          <label htmlFor="fname">First Name</label>
          <input
            id="fname"
            value={fName}
            onChange={(e) => setFName(e.target.value)}
            type="text"
            placeholder="First Name"
          />
          <label htmlFor="lname">Last Name</label>
          <input
            id="lname"
            value={lName}
            onChange={(e) => setLName(e.target.value)}
            type="text"
            placeholder="Last Name"
          />
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
          <ButtonPrimary
            name="Create Account"
            type="submit"
            onClick={hanldeSignup}
          />
        </form>
        <div className="signup__divider">
          <hr /> <span>OR</span> <hr />
        </div>
        <Link to="/login">
          <ButtonSecondary name="Sign In" />
        </Link>
      </div>
    </div>
  );
};

export default Signup;
