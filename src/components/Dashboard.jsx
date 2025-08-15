import { Box, List, ListItem, ListItemText, IconButton } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import useAuth from "../services/useAuth";

const Dashboard = () => {
  const { logout } = useAuth();
  const handleLogout = () => {
    logout();
  };
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <List>
        <ListItem>
          <ListItemText primary="Banana" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Apple" />
        </ListItem>
      </List>
      <IconButton aria-label="Logout" onClick={handleLogout}>
        <LogoutIcon />
      </IconButton>
    </Box>
  );
};

export default Dashboard;
