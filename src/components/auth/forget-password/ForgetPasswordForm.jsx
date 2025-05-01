import { Box } from "@mui/material";
import PropTypes from "prop-types";
import React, { useRef } from "react";
import InputField from "../../common/InputField";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { handleReturnKey } from "../../../utils/helper";

const ForgetPasswordForm = ({
  values,
  handleChange,
  handleBlur,
  errors,
  touched,
  handleSubmit,
  isSubmitting,
}) => {
  const passwordRef = useRef(null);
  const emailRef = useRef(null);

  return (
    <Box sx={{ marginTop: 2 }}>
      <InputField
        id="email"
        label="Enter your email"
        usericon={true}
        icon={<MailOutlineIcon />}
        placeholder="example@email.com"
        size="small"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.email && errors.email}
        inputRef={emailRef}
        onKeyDown={(event) => {
          if (!isSubmitting)
            handleReturnKey(
              event,
              passwordRef,
              "email",
              "submit",
              handleSubmit
            );
        }}
        sx={{ marginTop: 1 }}
      />
    </Box>
  );
};

ForgetPasswordForm.propTypes = {
  values: PropTypes.object,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  errors: PropTypes.object,
  touched: PropTypes.object,
  isSubmitting: PropTypes.bool,
  handleSubmit: PropTypes.func,
};

export default ForgetPasswordForm;
