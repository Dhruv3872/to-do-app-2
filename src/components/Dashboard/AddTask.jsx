import { useEffect, useRef } from "react";
import {
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addToDo } from "@/store/slices/todos/todosSlice";

const AddTask = ({ open, onCancel }) => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [open]);
  // alert("78900");
  const handleAddTask = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newTask = formData.get("newTask");
    console.log(newTask);
    dispatch(addToDo(newTask));
    onCancel();
  };

  return (
    <Dialog open={open} onClose={onCancel} fullWidth>
      <DialogTitle>Add a Task</DialogTitle>
      <DialogContent>
        <form onSubmit={handleAddTask} id="addTask-from">
          <TextField
            // autoFocus // autoFocus should work. It isn't for some reason I haven't yet cracked.
            // Hence, the manual focus logic has been implemented. Courtesy: ChatGPT.
            fullWidth
            required
            id="newTask"
            name="newTask"
            label="New Task"
            variant="standard"
            inputRef={inputRef}
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
