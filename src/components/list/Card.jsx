import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React from "react";

const Card = ({ cardInfo }) => {
  return (
    <MyCard sx={{ boxShadow: 2 }}>
      <Box >
        <Typography variant="h6">{cardInfo.title}</Typography>
      </Box>
    </MyCard>
  );
};
const MyCard = styled(Box)({
  color: "black",
  backgroundColor: "white",
  padding: "0.8rem",
  display: "flex",
  flexDirection: "column",
  boxShadow: '3',
  gap: "1rem",
});

export default Card;
