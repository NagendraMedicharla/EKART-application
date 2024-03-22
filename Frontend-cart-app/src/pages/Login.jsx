import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import { user, loginUser } from "../features/loginSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage, validateYupSchema } from "formik";
import * as Yup from "yup";

// const validationSchema = Yup.object().shape({
//   email:Yup.string().email('Invalid email').required('Required'),
//   password:Yup.string().required('Required'),
// })

export default function LoginSignup() {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [submitForm, setSubmitForm]=useState(true)

  const handleChange = (e) => {
    setLoginDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(user({ email: loginDetails.email }));
    dispatch(loginUser({ ...loginDetails }))
      .then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          navigate("/");
        } else {
          alert("Invalid credentials!");
        }
      })
      .catch(() => {
        alert("Invalid credentials!");
      });
  };
  return (
    <div className="login-page">
      {/* <Formik
        initialValues={{email:'', password:''}}
        validationSchema={validateYupSchema}
        onSubmit={handleSubmit}
      /> */}
      <form onSubmit={handleLogin} className="login-container">
        <h1>Login</h1>
        <div className="login-fields">
          <TextField
            id="email"
            type="email"
            name="email"
            label="Email"
            variant="outlined"
            value={loginDetails.email}
            onChange={handleChange}
          />
          <TextField
            id="password"
            type="password"
            label="Password"
            variant="outlined"
            name="password"
            value={loginDetails.password}
            onChange={handleChange}
          />
        </div>
        <div className="login-btn-container">
          <Button type="submit" variant="contained">
            Login
          </Button>
        </div>
        <div>
          <p>
            Don't have an account? <Link to="/register">here</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
