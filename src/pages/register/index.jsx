import { useFormik } from "formik";
import { Typography, Divider, Box, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AuthHeading from "../../components/auth/AuthHeading";
import ButtonComponent from "../../components/common/ButtonComponent";
import RegisterForm from "../../components/auth/register/RegisterForm";
import { registerStyles } from "../../styles/register/registerStyles";
import { GRADIENTS } from "../../constants/gradient";
import { signUpValidation } from "../../utils/validationSchema";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-hot-toast";
import AppLogo from "../../components/auth/AppLogo";
import { useState } from "react";
import useAuth from "../../auth/useAuth";

const Register = () => {
  const { signUp } = useAuth();
  const styles = registerStyles;
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const register = async (email, password, firstName, lastName) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(userCredential.user, {
      displayName: `${firstName} ${lastName}`,
    });

    return userCredential;
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signUpValidation,

    onSubmit: (values) => {
      setIsSubmitting(true);

      register(values.email, values.password, values.firstName, values.lastName)
        .then((token) => {
          signUp(token);
          toast.success("You’ve registered successfully.");
          navigate("/dashboard");
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            toast.error("Email already in use.");
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
      <Box sx={styles.formContainer}>
        <Box sx={styles.formBox}>
          <Box sx={styles.contentContainer}>
            <AuthHeading heading="Get Started" />

            <RegisterForm
              handleSubmit={formik.handleSubmit}
              values={formik.values}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              errors={formik.errors}
              touched={formik.touched}
              isSubmitting={formik.isSubmitting}
            />
            <Box sx={{ marginTop: "40px" }}>
              <ButtonComponent
                variant="signup"
                marginTop="20px"
                hoverColor={GRADIENTS.brandHover}
                color="#FFFFFF"
                backgroundColor={GRADIENTS.brand}
                buttonTitle="Signup"
                onClick={formik.handleSubmit}
                isLoading={isSubmitting}
              />
            </Box>
            <Divider sx={{ mt: 2 }}>
              <Typography sx={styles.dividerText}>
                Already have an account?
                <Link sx={styles.loginLink} onClick={() => navigate("/login")}>
                  Log In
                </Link>
              </Typography>
            </Divider>
          </Box>
        </Box>
      </Box>

      <Box
        sx={styles.imageSection}
        style={{ backgroundImage: "url('/assets/svgs/auth/authImage.svg')" }}
      >
        <AppLogo pageType={"register"} />
      </Box>
    </Box>
  );
};

export default Register;
