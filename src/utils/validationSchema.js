import * as yup from "yup";

export const loginValidation = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email address is required."),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required."),
});

export const signUpValidation = yup.object().shape({
  firstName: yup.string().required("First name is required."),
  lastName: yup.string().required("Last name is required."),
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email address is required."),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Confirm password is required."),
});

export const forgetPasswordValidation = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email address is required."),
});
