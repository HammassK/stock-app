export const loginStyles = {
  mainContainer: {
    display: "flex",
    width: "100vw",
    minHeight: "100vh",
    backgroundColor: "black",
    "@media (max-width: 1199px)": {
      justifyContent: "center",
    },
  },

  imageSection: {
    display: { xs: "none", md: "flex" },
    width: "60%",
    minHeight: "100%",
    position: "relative",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },

  formSection: {
    width: { xs: "80vw", sm: "80%", md: "50%" },
    border: "1px solid gray",
    borderLeft: { md: "none" },
    borderRadius: {
      xs: "8px",
      md: "0 30px 30px 0",
    },
    display: "flex",
    justifyContent: "center",
    mr: { md: "5%" },
    height: "fit-content",
    alignSelf: "center",
    py: "2%",
  },

  formContainer: {
    width: { xs: "90%", md: "80%" },
    gap: "8px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  headingContainer: {
    display: "flex",
    gap: "16px",
    alignItems: "center",
  },
  headingText: {
    textAlign: "center",
    backgroundImage: "linear-gradient(to right, #EB19CC, #3B82F6)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    fontSize: { xs: "30px", md: "36px" },
    fontWeight: 650,
    fontFamily: "Aspekta, sans-serif",
  },
  subHeadingText: {
    color: "white",
    fontFamily: "Aspekta, sans-serif",
    textAlign: "start",
    mt: "16px",
  },

  formBox: {
    display: "flex",
    flexDirection: "column",
    mb: "12px",
    gap: "58px",
    height: "200px",
  },
  forgotPasswordButton: {
    fontFamily: "Aspekta, sans-serif",
    color: "#FFFFFF",
    fontSize: "16px",
    textTransform: "none",
    justifyContent: "flex-end",
    "@media (max-width: 900px)": {
      width: "80%",
    },
    alignSelf: "flex-end",
  },

  dividerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "16px",
  },

  dividerLine: {
    backgroundColor: "#FFFFFF",
    width: "40%",
  },

  dividerText: {
    color: "#FFFFFF",
    fontFamily: "Aspekta, sans-serif",
    fontSize: "16px",
  },

  signupText: {
    fontFamily: "Aspekta, sans-serif",
    fontWeight: "medium",
    color: "#696970",
    fontSize: "16px",
    mt: "16px",
    "@media (max-width: 600px)": {
      fontSize: "14px",
    },
    alignSelf: "center",
  },

  buttonsContainer: {
    gap: "40px",
    display: "flex",
    flexDirection: "column",
    marginTop: "50px",
  },

  loginFrom: {
    display: "flex",
    flexDirection: "column",
    my: "8px",
  },

  signupLink: {
    fontFamily: "Aspekta, sans-serif",
    fontWeight: "semibold",
    color: "#14E8DD",
    textDecoration: "underline",
    marginLeft: "4px",
    cursor: "pointer",
  },

  loginButtonsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },

  appLogo: {
    position: "absolute",
    top: 32,
    zIndex: 10,
    width: { xs: 100, sm: 220 },
  },
};
