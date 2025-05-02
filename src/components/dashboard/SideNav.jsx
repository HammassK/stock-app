import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Button,
  Typography,
  Divider,
  IconButton,
  Drawer,
  useMediaQuery,
} from "@mui/material";
import { Logout, Menu as MenuIcon } from "@mui/icons-material";
import useAuth from "../../auth/useAuth";
import { useNavigate } from "react-router-dom";
import { indicesStyles } from "../../styles/dashboard/indicesStyles";

const SideNav = ({ indicesList, activeIndex, onIndexChange }) => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  const styles = indicesStyles;
  const isMobile = useMediaQuery("(max-width:768px)");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const logout = () => {
    logOut();
    navigate("/login");
  };

  const handleIndexClick = (index) => {
    onIndexChange(index);
    if (isMobile) setDrawerOpen(false);
  };

  const SideNavContent = (
    <Box sx={styles.sideNavContainer}>
      <Box>
        <Typography sx={styles.headingText}>Indices</Typography>
        <Divider color="#FFFFFF" sx={{ my: 1 }} />
        <List sx={styles.indicesList}>
          {indicesList?.map((index) => (
            <ListItem
              key={index}
              button
              onClick={() => handleIndexClick(index)}
              sx={styles.indexButton(activeIndex === index)}
            >
              <ListItemText primary={index} />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box sx={{ p: 2 }}>
        <Button
          variant="outlined"
          color="error"
          startIcon={<Logout />}
          sx={{ width: "100%" }}
          onClick={logout}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      {isMobile ? (
        <>
          <IconButton
            onClick={() => setDrawerOpen((prev) => !prev)}
            sx={{ position: "absolute", top: 16, right: 16, zIndex: 1300 }}
          >
            <MenuIcon sx={{ color: "#fff" }} />
          </IconButton>
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            PaperProps={{
              sx: {
                width: 250,
                backgroundColor: "#0b1221",
                color: "white",
              },
            }}
          >
            {SideNavContent}
          </Drawer>
        </>
      ) : (
        <Box sx={styles.sideNavContainer}>{SideNavContent}</Box>
      )}
    </>
  );
};

export default SideNav;
