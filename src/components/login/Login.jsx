import styled from "@emotion/styled";
import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { useSnackbar } from "notistack";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const notify = (message, variant = "success") => {
    enqueueSnackbar({
      variant: variant,
      autoHideDuration: 5000,
      message: message,
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
      hideIconVariant: "true",
    });
  };

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      navigate("/");
      console.log(user);
      notify("Successfully logged in!")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      notify(error?.message || error || "Something went wrong", "error");
      console.log(errorCode, errorMessage);
    });
  };
  return (
    <Box>
      <StyledBox sx={{ boxShadow: 3 }} component={"form"}>
        <h1>Login Trello</h1>
        <TextField
          label="enter your email"
          variant="outlined"
          value={email}
          type="email"
          required
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="enter password"
          variant="outlined"
          value={password}
          type="password"
          required
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          className="submit"
          // disabled={isSubmitDisabled}
          onClick={onLogin}
        >
          Login
        </Button>
        <p className="text-sm text-white text-center">
          No account yet? <NavLink to="/register">Register</NavLink>
        </p>
      </StyledBox>
      ///
    </Box>
  );
};
const StyledBox = styled(Box)(() => ({
  width: "500px",
  height: "400px",
  border: "1px solid black",
  position: "relative",
  left: "400px",
  top: "100px",
  flexDirection: "column",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  gap: "0.5rem",
  boxShadow: "3",
  "& .submit": {
    width: "200px",
    height: "60px",
    borderRadius: "1rem",
  },
}));
export default Login;
