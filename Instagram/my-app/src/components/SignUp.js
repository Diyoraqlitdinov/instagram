import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "./firebase";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import img from "../components/image/Icon.png"


const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password, username)
      .then(() => {
        console.log("Success");
        navigate("/")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="color-overlay d-flex justify-content-center align-items-center mt-5">
      <img className="w-25" src={img}></img>
      <form className="rounded p-4 p-sm-3">
      <form className="mb-3" controlID="formBasicEmail">
        <h1 id="SignUp">Sign Up</h1>
        <div className="SignUp">
          <input
            className="uzb"
            type="Username"
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <br></br>
          <br></br>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <br></br>
          <br></br>
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <br></br>
          <br></br>
          <Button className="btn " onClick={handleSignUp} type="submit">
            Register
          </Button>
          <br></br>
        </div>
        <p  colorScheme='teal'><Link to="/signin">Login</Link>
        </p>
        </form>
      </form>
     
    </div>
  );
};

export default SignUp;
