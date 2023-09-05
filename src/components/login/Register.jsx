import styled from "@emotion/styled";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { auth } from "../../firebase";
import { Box, Button, TextField } from "@mui/material";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { NavLink } from "react-router-dom";
import { useSnackbar } from "notistack";

const Register = () => {
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
  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/");
        notify("Successfully saved!")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        notify(error?.message || error || "Something went wrong", "error");
        // ..
      });
  };
  return (
    <Box>
      <StyledBox sx={{ boxShadow: 3 }} component={"form"}>
        <h1>Register Trello</h1>
        <TextField
          label="enter your email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="enter password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          className="submit"
          onClick={onSubmit}
        >
          Register
        </Button>
        <p>
          Already have an account? <NavLink to="/login">Sign in</NavLink>
        </p>
      </StyledBox>
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
export default Register;
