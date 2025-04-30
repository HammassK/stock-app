import { useFormik } from "formik";
import React from "react";
import { Box } from "@mui/material";
import { loginStyles } from "../../styles/login/loginStyles";
import LoginButtons from "../../components/auth/login/LoginButtons";
import LoginForm from "../../components/auth/login/LoginForm";
import AuthHeading from "../../components/auth/AuthHeading";
import ButtonComponent from "../../components/common/ButtonComponent";
import { GRADIENTS } from "../../constants/gradient";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { loginValidation } from "../../utils/ValidationSchema";
import { toast } from "react-hot-toast";

const Login = () => {
  const s = loginStyles;

  const login = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidation,

    onSubmit: (values) => {
      login(values.email, values.password)
        .then(() => {
          toast.success("Logged in successfully");
        })
        .catch((error) => {
          if (error.code === "auth/invalid-credential") {
            toast.error("Invalid credentials provided.");
          } else {
            toast.error(`${error.message}`);
          }
        });
    },
  });

  return (
    <Box sx={s.mainContainer}>
      <Box
        sx={s.imageSection}
        style={{ backgroundImage: "url('/assets/svgs/auth/authImage.svg')" }}
      />

      <Box sx={s.formSection}>
        <Box sx={s.formContainer}>
          <AuthHeading heading="Welcome Back" />

          <Box sx={s.loginFrom}>
            <LoginForm
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
              handleSubmit={formik.handleSubmit}
              values={formik.values}
              errors={formik.errors}
              isSubmitting={formik.isSubmitting}
              touched={formik.touched}
            />

            <Box sx={s.buttonsContainer}>
              <ButtonComponent
                variant="signup"
                hover="black"
                buttonTitle="Sign in"
                color="#FFFFFF"
                backgroundColor={GRADIENTS.brand}
                hoverColor={GRADIENTS.brandHover}
                onClick={formik.handleSubmit}
                isLoading={false}
              />
              <LoginButtons />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
