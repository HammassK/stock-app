import { Box, styled } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

const AuthLayoutRoot = styled("div")(() => ({
  flex: 1,
  backgroundColor: "black",
  minHeight: "100vh",
}));

const AuthLayout = ({ children }) => {
  return (
    <AuthLayoutRoot>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          width: "100%",
          justifyContent: "flex-start",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            maxWidth: "1920px",
          }}
        >
          {children}
        </Box>
      </Box>
    </AuthLayoutRoot>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node,
};

export default AuthLayout;
