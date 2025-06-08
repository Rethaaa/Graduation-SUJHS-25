import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Yearbook", href: "#yearbook" },
  { label: "Students", href: "#students" },
  { label: "Teachers", href: "#teachers" },
  { label: "Memories", href: "#memories" },
];
// const navItems = ["Home", "Yearbook", "Students", "Teachers", "Memories"];

const ResponsiveNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", backgroundColor: "#002A45", height: "100%" }}>
      <Typography variant="h6" sx={{ my: 2, color: "#fff"}}>
        MOSAIC
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem button key={item.label} component="a" href={item.href} sx={{color: "#fff", backgroundColor: "#002A45",}}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar component="nav">
        <Toolbar >
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 3,
            }}
          >
            <img
              srcSet={"./Logo.png"}
              alt={"Logo"}
              loading="lazy"
              width={50}
            />
            <Typography
              variant="h6"
            >
              MOSAIC
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item.label} sx={{ color: "#fff" }} component="a" href={item.href}>
                {item.label}
              </Button>
            ))}
          </Box>
          <IconButton
            color="inherit"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />
    </>
  );
};

export default ResponsiveNavbar;