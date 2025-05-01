import { Box, Typography } from "@mui/material";
import { GRADIENTS } from "../../constants/gradient";
import useAuth from "../../auth/useAuth";
import ButtonComponent from "../../components/common/ButtonComponent";

const Dashboard = () => {
  const { logOut } = useAuth();

  return (
    <Box>
      <Typography>Dashboard</Typography>
      <ButtonComponent
        variant="signup"
        marginTop="20px"
        hoverColor={GRADIENTS.brandHover}
        color="#FFFFFF"
        backgroundColor={GRADIENTS.brand}
        buttonTitle="Signup"
        onClick={logOut}
        isLoading={false}
      />
    </Box>
  );
};

export default Dashboard;
