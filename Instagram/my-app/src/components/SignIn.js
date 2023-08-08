import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Sucess");
        navigate("/")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="color-overlay d-flex justify-content-center align-items-center">
      <form className="rounded p-4 p-sm-3">
      <form1 className="mb-3" controlID="formBasicEmail">
        <h1 id="login">Login</h1>
        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/color-glass/48/new-post.png"
          alt="new-post"
        />
        <br></br>
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <img
          width="64"
          height="64"
          src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/external-password-cyber-security-kiranshastry-lineal-color-kiranshastry.png"
          alt="external-password-cyber-security-kiranshastry-lineal-color-kiranshastry"
        />
        <br></br>
        <br></br>
        <button onClick={handleSignIn} type="submit">
          Login
        </button>
        <br></br>
        <br></br>
        <Button  colorScheme='teal'><Link to="/signup">Register</Link>
        </Button>
        </form1>
      </form>
    </div>
  );
};

export default SignIn;
