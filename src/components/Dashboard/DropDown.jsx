import {
  Typography,
  Grid,
  Box,
  Tooltip,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";

// Icons:
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LogoutIcon from "@mui/icons-material/Logout";

// Local imports:
import useAuth from "@/services/useAuth";
import { useSelector } from "react-redux";

const DropDown = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const firstName = useSelector((state) => state.user.firstName);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleMembersClick = () => {
    navigate("/members");
  };
  const handleLogout = () => {
    logout();
  };
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Menu">
          <IconButton
            onClick={handleMenuClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <MenuOutlinedIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="menu"
        open={open}
        onClose={handleMenuClose}
        // onClick={handleMenuClick}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <AccountCircleOutlinedIcon />{" "}
          <Typography sx={{ ml: 2 }}>{firstName}</Typography>
        </MenuItem>
        <MenuItem onClick={handleMembersClick}>
          <PeopleOutlinedIcon /> <Typography sx={{ ml: 2 }}>Members</Typography>
        </MenuItem>
        <MenuItem>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid size={6} sx={{ textAlign: "center" }}>
                <IconButton sx={{ border: 1 }}>
                  <LightModeOutlinedIcon />
                </IconButton>
              </Grid>
              <Grid size={6} sx={{ textAlign: "center" }}>
                <IconButton sx={{ border: 1 }}>
                  <DarkModeOutlinedIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Box>
        </MenuItem>
        <MenuItem onClick={handleLogout} aria-label="Logout">
          <LogoutIcon /> <Typography sx={{ ml: 2 }}>Logout</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default DropDown;
