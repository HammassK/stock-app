import { Box, Divider, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { loginStyles } from "../../../styles/login/loginStyles";

const LoginButtons = () => {
  const styles = loginStyles;

  return (
    <Box sx={styles.loginButtonsContainer}>
      <Box sx={styles.dividerContainer}>
        <Divider sx={styles.dividerLine} />
        <Typography sx={styles.dividerText}>or</Typography>
        <Divider sx={styles.dividerLine} />
      </Box>

      <Typography sx={styles.signupText}>
        Don't have an account?
        <a href="/register" style={styles.signupLink}>
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
