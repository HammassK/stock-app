import { Box } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import InputField from "../../common/InputField";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import EmailIcon from "@mui/icons-material/Email";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const RegisterForm = ({
  values,
  handleChange,
  handleBlur,
  errors,
  touched,
}) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 7 }}>
      <Box sx={{ display: "flex", gap: 3 }}>
        <InputField
          id="firstName"
          label="First Name"
          icon={<PersonOutlineIcon />}
          placeholder="John"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.firstName && errors.firstName}
        />
        <InputField
          id="lastName"
          label="Last Name"
          icon={<PersonOutlineIcon />}
          placeholder="Doe"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.lastName && errors.lastName}
        />
      </Box>

      <InputField
        id="email"
        label="Email"
        icon={<EmailIcon />}
        placeholder="example@email.com"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.email && errors.email}
      />

      <InputField
        id="password"
        label="Password"
        icon={<LockOutlinedIcon />}
        type="password"
        placeholder="Create password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.password && errors.password}
        EyeIcon={true}
      />

      <InputField
        id="confirmPassword"
        label="Confirm Password"
        icon={<LockOutlinedIcon />}
        type="password"
        placeholder="Confirm password"
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.confirmPassword && errors.confirmPassword}
        EyeIcon={true}
      />
    </Box>
  );
};

RegisterForm.propTypes = {
  values: PropTypes.object,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  errors: PropTypes.object,
  touched: PropTypes.object,
  isSubmitting: PropTypes.bool,
  handleSubmit: PropTypes.func,
};

export default RegisterForm;
