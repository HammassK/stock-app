import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { loginStyles } from "../../styles/login/loginStyles";

const AuthHeading = ({ heading, icon }) => {
  const s = loginStyles;

  return (
    <Box>
      <Box sx={s.headingContainer}>
        <Typography sx={s.headingText}>{heading}</Typography>
        <Box sx={{ width: "40px", height: "40px" }}>{icon}</Box>
      </Box>
    </Box>
  );
};

AuthHeading.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  icon: PropTypes.element,
};

export default AuthHeading;
