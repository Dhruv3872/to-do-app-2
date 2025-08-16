import {
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addToDo } from "../store/slices/todos/todosSlice";

const AddTask = ({ open, onCancel }) => {
  const dispatch = useDispatch();
  const handleAddTask = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newTask = formData.get("newTask");
    console.log(newTask);
    dispatch(addToDo(newTask));
    onCancel();
  };

  return (
    <Dialog open={open} onClose={onCancel}>
      <DialogTitle>Add Task</DialogTitle>
      <DialogContent>
        <form onSubmit={handleAddTask} id="addTask-from">
          <TextField
            autoFocus
            required
            fullWidth
            id="newTask"
            name="newTask"
            label="New Task"
            variant="standard"
          ></TextField>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>Cancel</Button>
        <Button type="submit" form="addTask-from">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddTask;
