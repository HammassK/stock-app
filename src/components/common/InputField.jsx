import {
  TextField,
  InputAdornment,
  Box,
  InputLabel,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import React, { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const InputField = ({
  id,
  placeholder,
  size,
  value,
  onChange,
  onBlur,
  icon,
  EyeIcon,
  type,
  error,
  label,
  inputRef,
  name,
  multilpleRows,
  onKeyDown,
  sx,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <Box sx={{ width: "100%", height: multilpleRows ? "auto" : "44px" }}>
      {label && (
        <InputLabel
          sx={{
            fontFamily: "Aspekta, sans-serif",
            display: "block",
            fontSize: "14px",
            color: "white",
            mb: "8px",
          }}
        >
          {label}:
        </InputLabel>
      )}
      <TextField
        fullWidth
        sx={{
          "& input:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 1000px #474747 inset",
            WebkitTextFillColor: "white",
            transition: "background-color 9999s ease-in-out 0s",
          },
          "& input::placeholder": {
            color: "#AEB9E1",
            fontSize: "16px",
          },
          "& input": {
            color: "white",
          },
          "& .MuiOutlinedInput-root": {
            height: multilpleRows ? "auto" : "44px",
            backgroundColor: "#474747",
            transition: "all 0.3s ease",
            "& fieldset": {
              borderColor: "#919297",
            },
            "&:hover fieldset": {
              borderColor: "#EB19CC",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#EB19CC",
            },
            "& .MuiInputAdornment-root": {
              color: "rgba(142, 146, 158, 1)",
            },
          },
          ...sx,
        }}
        id={id}
        name={name}
        multiline={multilpleRows}
        minRows={multilpleRows ? 3 : 1}
        placeholder={placeholder}
        value={value}
        type={type ? (showPassword ? "text" : type) : "text"}
        onChange={onChange}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        size={size}
        InputProps={{
          startAdornment: icon && (
            <InputAdornment position="start" sx={{ color: "#FFFFFF" }}>
              {icon}
            </InputAdornment>
          ),
          endAdornment: EyeIcon && (
            <InputAdornment position="end">
              <Button
                sx={{
                  cursor: "pointer",
                  minWidth: "auto",
                  color: "rgba(142, 146, 158, 1)",
                }}
                onClick={handleClickShowPassword}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </Button>
            </InputAdornment>
          ),
        }}
        error={Boolean(error)}
        helperText={error}
        inputRef={inputRef}
      />
    </Box>
  );
};

InputField.propTypes = {
  error: PropTypes.string,
  id: PropTypes.string,
  size: PropTypes.string,
  label: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  EyeIcon: PropTypes.bool,
  icon: PropTypes.element,
  type: PropTypes.string,
  inputRef: PropTypes.object,
  name: PropTypes.string,
  multilpleRows: PropTypes.bool,
  sx: PropTypes.object,
};

export default InputField;
