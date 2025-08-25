import {
  AppBar,
  Toolbar,
  Grid,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
} from "@mui/material";
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
  const userId = useSelector((state) => state.user.id);
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
    <Grid
      container
      direction="column"
      component="paper"
      elevation={1}
      sx={{
        width: "100vw", // To take the entire viewport width.
        height: "100vh", // // To take the entire viewport height.
        p: 5,
      }}
    >
      <AppBar
        position="static"
        sx={{ p: "2px 2px 2px 0px", m: "2px 2px 20px 0px" }}
      >
        <Toolbar>
          <Grid size={11}>
            <Typography variant="h6" component="div">
              My To-Do List
            </Typography>
          </Grid>
          <Grid size={1} sx={{ textAlign: "end" }}>
            <IconButton aria-label="Logout" onClick={handleLogout}>
              <LogoutIcon />
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
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
                sx={{ mb: "2px" }}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary={todo} />
          </ListItem>
        </List>
      ))}
      <Grid
        size={12}
        sx={{
          textAlign: "center",
        }}
      >
        <IconButton aria-label="Add a task" onClick={handleClickAddTask}>
          <AddCircleOutlineOutlinedIcon />
        </IconButton>
      </Grid>
      <AddTask open={open} onCancel={handleClose} />
    </Grid>
  );
};

export default Dashboard;
