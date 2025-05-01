import { useFormik } from "formik";
import React, { useState } from "react";
import { Box } from "@mui/material";
import { loginStyles } from "../../styles/login/loginStyles";
import LoginButtons from "../../components/auth/login/LoginButtons";
import LoginForm from "../../components/auth/login/LoginForm";
import AuthHeading from "../../components/auth/AuthHeading";
import ButtonComponent from "../../components/common/ButtonComponent";
import { GRADIENTS } from "../../constants/gradient";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { loginValidation } from "../../utils/validationSchema";
import { toast } from "react-hot-toast";
import AppLogo from "../../components/auth/AppLogo";
import { useNavigate } from "react-router-dom";
import useAuth from "../../auth/useAuth";

const Login = () => {
  const { logIn } = useAuth();
  const navigate = useNavigate();
  const styles = loginStyles;
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      setIsSubmitting(true);

      login(values.email, values.password)
        .then((token) => {
          logIn(token);
          toast.success("Logged in successfully.");
          navigate("/dashboard");
        })
        .catch((error) => {
          if (error.code === "auth/invalid-credential") {
            toast.error("Invalid credentials provided.");
          } else {
            toast.error(`${error.message}`);
          }
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    },
  });

  return (
    <Box sx={styles.mainContainer}>
      <Box
        sx={styles.imageSection}
        style={{ backgroundImage: "url('/assets/svgs/auth/authImage.svg')" }}
      >
        <AppLogo pageType={"login"} />
      </Box>

      <Box sx={styles.formSection}>
        <Box sx={styles.formContainer}>
          <AuthHeading heading="Welcome Back" />

          <Box sx={styles.loginFrom}>
            <LoginForm
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
              handleSubmit={formik.handleSubmit}
              values={formik.values}
              errors={formik.errors}
              isSubmitting={formik.isSubmitting}
              touched={formik.touched}
            />

            <Box sx={styles.buttonsContainer}>
              <ButtonComponent
                variant="signup"
                hover="black"
                buttonTitle="Sign in"
                color="#FFFFFF"
                backgroundColor={GRADIENTS.brand}
                hoverColor={GRADIENTS.brandHover}
                onClick={formik.handleSubmit}
                isLoading={isSubmitting}
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
