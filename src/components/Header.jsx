import { Box, Button } from "@mui/material";
import React from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router";
import { signOut } from "@firebase/auth";
import styled from "@emotion/styled";

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/register");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
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
