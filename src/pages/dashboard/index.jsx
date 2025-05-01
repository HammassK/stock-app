import { Box, Typography } from "@mui/material";
import { GRADIENTS } from "../../constants/gradient";
import useAuth from "../../auth/useAuth";
import ButtonComponent from "../../components/common/ButtonComponent";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    logOut();
    navigate("/login");
  };

  return (
    <Box>
      <Typography>Dashboard</Typography>
      <ButtonComponent
        variant="signup"
        marginTop="20px"
        hoverColor={GRADIENTS.brandHover}
        color="#FFFFFF"
        backgroundColor={GRADIENTS.brand}
        buttonTitle="Logout"
        onClick={logout}
        isLoading={false}
      />
    </Box>
  );
};

export default Dashboard;
