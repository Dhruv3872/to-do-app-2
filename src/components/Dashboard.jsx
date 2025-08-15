import { Box, List, ListItem, ListItemText, IconButton } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import useAuth from "../services/useAuth";
import useToDos from "../services/useToDos";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const { logout } = useAuth();
  const { fetchAndSaveToDos } = useToDos();
  const todos = useSelector((state) => state.todos.value);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchAndSaveToDos();
    setLoading(false);
  }, []);
  const handleLogout = () => {
    logout();
  };
  return loading ? (
    <p>Loading to-do list...</p>
  ) : (
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
