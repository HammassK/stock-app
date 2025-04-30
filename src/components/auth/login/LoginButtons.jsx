import { Box, Divider, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { loginStyles } from "../../../styles/login/loginStyles";

const LoginButtons = () => {
  const s = loginStyles;

  return (
    <Box sx={s.loginButtonsContainer}>
      <Box sx={s.dividerContainer}>
        <Divider sx={s.dividerLine} />
        <Typography sx={s.dividerText}>or</Typography>
        <Divider sx={s.dividerLine} />
      </Box>

      <Typography sx={s.signupText}>
        Don't have an account?
        <a href="/register" style={s.signupLink}>
          Sign up
        </a>
      </Typography>
    </Box>
  );
};

LoginButtons.propTypes = {
  push: PropTypes.func,
};

export default LoginButtons;
