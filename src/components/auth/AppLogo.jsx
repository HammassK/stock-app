import { Box } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { loginStyles } from "../../styles/login/loginStyles";
import Logo from "../../../public/assets/svgs/auth/Logo";

const AppLogo = ({ pageType }) => {
  const styles = loginStyles;
  const isLogin = pageType === "login";

  return (
    <Box
      sx={{
        ...styles.appLogo,
        left: isLogin ? 32 : undefined,
        right: isLogin ? undefined : 32,
      }}
    >
      <Logo />
    </Box>
  );
};

AppLogo.propTypes = {
  pageType: PropTypes.string,
};

export default AppLogo;
