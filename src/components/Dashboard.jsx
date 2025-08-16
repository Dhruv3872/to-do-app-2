import { Box, List, ListItem, ListItemText, IconButton } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import useAuth from "../services/useAuth";
import useToDos from "../services/useToDos";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import AddTask from "./AddTask";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const { logout } = useAuth();
  const { fetchAndSaveToDos } = useToDos();
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    async function fetchAndSave() {
      await fetchAndSaveToDos();
      setLoading(false);
    }
    fetchAndSave();
  }, []);
  const handleClickAddTask = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleLogout = () => {
    logout();
  };
  return loading ? (
    <p>Loading to-do list...</p>
  ) : (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {todos.map((todo) => (
        <List>
          <ListItem key={todos.indexOf(todo)}>
            <ListItemText primary={todo} />
          </ListItem>
        </List>
      ))}
      <IconButton aria-label="Add a task" onClick={handleClickAddTask}>
        <AddCircleOutlineOutlinedIcon />
      </IconButton>
      <IconButton aria-label="Logout" onClick={handleLogout}>
        <LogoutIcon />
      </IconButton>
      <AddTask open={open} onCancel={handleClose} />
    </Box>
  );
};

export default Dashboard;
