import { Box } from "@mui/material";
import Indices from "../../components/dashboard/Indices";
const Dashboard = () => {
  return (
    <Box sx={{ backgroundColor: "black", minHeight: "100vh" }}>
      <Indices />
    </Box>
  );
};

export default Dashboard;
