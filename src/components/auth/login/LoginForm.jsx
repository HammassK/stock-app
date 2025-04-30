import { Box } from "@mui/material";
import PropTypes from "prop-types";
import React, { useRef } from "react";
import { loginStyles } from "../../../styles/login/loginStyles";
import InputField from "../../common/InputField";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const LoginForm = ({ values, handleChange, handleBlur, errors, touched }) => {
  const s = loginStyles;
  const passwordRef = useRef(null);
  const emailRef = useRef(null);

  return (
    <Box sx={s.formBox}>
      <InputField
        id="email"
        label="Email"
        usericon={true}
        icon={<MailOutlineIcon />}
        placeholder="Example@email.com"
        size="small"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.email && errors.email}
        inputRef={emailRef}
      />

      <InputField
        id="password"
        label="Password"
        icon={<LockOutlinedIcon />}
        EyeIcon={true}
        size="small"
        type="password"
        placeholder="Password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.password && errors.password}
        inputRef={passwordRef}
      />
    </Box>
  );
};

LoginForm.propTypes = {
  values: PropTypes.object,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  errors: PropTypes.object,
  touched: PropTypes.object,
  isSubmitting: PropTypes.bool,
  handleSubmit: PropTypes.func,
};

export default LoginForm;
