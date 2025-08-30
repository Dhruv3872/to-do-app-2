import { Grid, List, ListItem, ListItemText, IconButton } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddTask from "./AddTask";
import Header from "@/components/global/Header/Header";
import { deleteToDo } from "@/store/slices/todos/todosSlice";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
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
  return loading ? (
    <p>Loading to-do list...</p>
  ) : (
    <Grid
      container
      direction="column"
      elevation={1}
      sx={{
        width: "100vw", // To take the entire viewport width.
        height: "100vh", // // To take the entire viewport height.
        p: 5,
      }}
    >
      <Header />
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
