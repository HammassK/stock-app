import { useFormik } from "formik";
import { Typography, Divider, Box, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AuthHeading from "../../components/auth/AuthHeading";
import ButtonComponent from "../../components/common/ButtonComponent";
import { registerStyles } from "../../styles/register/registerStyles";
import { GRADIENTS } from "../../constants/gradient";
import { forgetPasswordValidation } from "../../utils/validationSchema";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-hot-toast";
import AppLogo from "../../components/auth/AppLogo";
import { useState } from "react";
import ForgetPasswordForm from "../../components/auth/forget-password/ForgetPasswordForm";

const ForgetPassword = () => {
  const styles = registerStyles;
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const forgetPassword = async (email) => {
    return await sendPasswordResetEmail(auth, email);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgetPasswordValidation,

    onSubmit: (values) => {
      setIsSubmitting(true);

      forgetPassword(values.email)
        .then(() => {
          toast.success("Reset link sent. Check your inbox.");
          navigate("/login");
        })
        .catch((error) => {
          toast.error(`${error?.message}`);
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
            <AuthHeading heading="Forget Password?" />

            <ForgetPasswordForm
              handleSubmit={formik.handleSubmit}
              values={formik.values}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              errors={formik.errors}
              touched={formik.touched}
              isSubmitting={formik.isSubmitting}
            />
            <ButtonComponent
              variant="signup"
              marginTop="60px"
              hoverColor={GRADIENTS.brandHover}
              color="#FFFFFF"
              backgroundColor={GRADIENTS.brand}
              buttonTitle="Send"
              onClick={formik.handleSubmit}
              isLoading={isSubmitting}
            />
            <Divider sx={{ mt: 2 }}>
              <Typography sx={styles.dividerText}>
                Back to
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

export default ForgetPassword;
