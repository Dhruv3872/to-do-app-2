import { Alert, Snackbar } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { resetMessage } from "../store/slices/message/messageSlice";

const GlobalMessage = () => {
  const dispatch = useDispatch();
  const { open, message, severity } = useSelector((state) => state.message);
  const handleClose = () => {
    dispatch(resetMessage());
  };
  return (
    <Snackbar
      open={open}
      onClose={handleClose} /* So that the Escape key can close the message. 
      Without explicitly setting this in the Snackbar,
      the message will not close when the Escape key is pressed. */
      autoHideDuration={
        5000
      } /* This is important to set to trigger the `onClose` prop
      which will trigger the `handleClose` function to reset the message state. */
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};
export default GlobalMessage;
