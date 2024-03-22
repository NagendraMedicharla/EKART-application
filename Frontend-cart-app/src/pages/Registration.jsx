import { Link, useNavigate } from "react-router-dom";
import "../styles/Registration.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../features/loginSlice";
import { Snackbar, Alert } from "@mui/material";

export default function Registration() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [registrationDetails, setRegistrationDetails] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [open, setOpen] = useState(false)

  const handleChange = (e) => {
    setRegistrationDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    dispatch(registerUser({ ...registrationDetails }))
      .then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          setOpen(true);
          setTimeout(() => {
            navigate("/login");
          }, 2000)
        } else {
          alert("Invalid credentials!");
        }
      })
      .catch(() => {
        alert("Invalid credentials!");
      });
  };

  const handleClose = () => {
    setOpen(false);
  }

  const renderSnackBar = () => {
    return (
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: 'right' }}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%", mt: "40px" }}
        >
          User Registered successfully!
        </Alert>
      </Snackbar>
    );
  };

  return (
    <div className="register-page">
      {open && renderSnackBar()}
      <form onSubmit={handleRegistration} className="register-container">
        <h1>Register</h1>
        <div className="register-fields">
          <TextField
            id="username"
            type="text"
            name="username"
            label="User Name"
            variant="outlined"
            value={registrationDetails.username}
            onChange={handleChange}
          />
          <TextField
            id="email"
            type="email"
            name="email"
            label="Email"
            variant="outlined"
            value={registrationDetails.email}
            onChange={handleChange}
          />
          <TextField
            id="password"
            type="password"
            label="Password"
            variant="outlined"
            name="password"
            value={registrationDetails.password}
            onChange={handleChange}
          />
        </div>
        <div className="register-btn-container">
          <Button type="submit" variant="contained">
            Login
          </Button>
        </div>
        <div>
          <p>
            Already have an account? <Link to="/login">here</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
