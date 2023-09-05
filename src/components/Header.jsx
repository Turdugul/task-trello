import { Box, Button } from "@mui/material";
import React from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router";
import { signOut } from "@firebase/auth";
import styled from "@emotion/styled";
import { useSnackbar } from "notistack";

const Header = () => {
  const navigate = useNavigate();
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
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/register");
        notify("Signed out successfully!")
        console.log("Signed out successfully!");
      })
      .catch((error) => {
        // An error happened.
        notify(error?.message || error || "Something went wrong", "error");
      });
  };
  return (
    <header>
      <MyCard>
        <Button color="inherit" onClick={handleLogout}>
          {" "}
          Logout
        </Button>
      </MyCard>
    </header>
    
  );
};
const MyCard = styled(Box)({
  position: "relative",
  right: "0px",
});
export default Header;
