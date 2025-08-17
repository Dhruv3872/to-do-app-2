import { Box, List, ListItem, ListItemText, IconButton } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import useAuth from "../services/useAuth";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddTask from "./AddTask";
import { deleteToDo } from "../store/slices/todos/todosSlice";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const { logout } = useAuth();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.value.id);
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    async function fetchAndSave() {
      dispatch({ type: "USER_TODOS_FETCH_REQUESTED", payload: userId });
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
  // Delete the task at hand:
  const handleClickDeleteTask = (todo) => {
    dispatch(deleteToDo(todo));
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
          <ListItem
            key={todos.indexOf(todo)}
            divider
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleClickDeleteTask(todo)}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
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
