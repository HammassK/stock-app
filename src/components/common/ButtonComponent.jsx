import { Button, CircularProgress } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

const ButtonComponent = ({
  icon,
  buttonTitle,
  onClick,
  isLoading,
  backgroundColor,
  color,
  hoverColor,
  border,
  paddingLeft,
  marginTop,
}) => {
  const isGoogleButton = buttonTitle === "Sign in with Google";

  const gradientBackground = "linear-gradient(to right, #EC4899, #3B82F6)";
  const gradientHover = "linear-gradient(to right, #DB2777, #2563EB)";

  return (
    <Button
      sx={{
        height: "44px",
        borderRadius: "8px",
        fontFamily: "Aspekta, sans-serif",
        fontWeight: 750,
        marginTop: marginTop || 0,
        fontSize: isGoogleButton ? "16px" : "20px",
        textTransform: "none",
        background:
          backgroundColor === "bg-gradient-brand"
            ? gradientBackground
            : backgroundColor || "#151414",
        color: color || "black",
        "&:hover": {
          background:
            backgroundColor === "bg-gradient-brand"
              ? gradientHover
              : hoverColor || "#222222",
        },
        border: border || "none",
        paddingLeft: icon?.type?.name === "Facebook" ? "26px" : paddingLeft,
        width: "100%",
      }}
      startIcon={icon && !isLoading ? icon : null}
      onClick={onClick}
    >
      {isLoading ? (
        <CircularProgress sx={{ color: "white" }} size={30} />
      ) : (
        buttonTitle
      )}
    </Button>
  );
};

ButtonComponent.propTypes = {
  buttonTitle: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.element,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  border: PropTypes.string,
  isLoading: PropTypes.bool,
  paddingLeft: PropTypes.string,
  marginTop: PropTypes.string,
};

export default ButtonComponent;
