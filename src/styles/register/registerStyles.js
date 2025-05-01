export const registerStyles = {
  mainContainer: {
    display: "flex",
    width: { xs: "100%", md: "99vw" },
    justifyContent: { xs: "center", md: "flex-end" },
    backgroundColor: "black",
    minHeight: "100vh",
  },

  formContainer: {
    width: { xs: "80%", md: "45%" },
    alignSelf: "center",
  },

  formBox: {
    border: "1px solid gray",
    borderRight: { md: "none" },
    borderRadius: {
      xs: "8px",
      md: "30px 0 0 30px",
    },
    display: "flex",
    justifyContent: "center",
    py: "20px",
    my: "20px",
  },

  contentContainer: {
    width: { xs: "80%", md: "80%" },
    gap: "8px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  dividerText: {
    fontFamily: "Aspekta, sans-serif",
    color: "#FFFFFF",
    fontSize: { xs: "14px", sm: "16px" },
  },

  loginLink: {
    fontFamily: "Aspekta, sans-serif",
    fontWeight: "semibold",
    color: "#14E8DD",
    textDecoration: "underline",
    ml: "4px",
    cursor: "pointer",
  },

  imageSection: {
    display: { xs: "none", md: "flex" },
    width: "50%",
    position: "relative",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
};
