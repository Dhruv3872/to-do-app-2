import {
  Paper,
  Avatar,
  Button,
  TextField,
  Typography,
  Grid,
  Link,
  InputAdornment,
  IconButton,
} from "@mui/material";
import LockOutlineIcon from "@mui/icons-material/LockOutline";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useDispatch } from "react-redux";
import { USER_LOGIN_REQUESTED } from "@/constants";
import { useState } from "react";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleLogin = async (event) => {
    event.preventDefault();
    console.log(event.currentTarget);
    // Get form data:
    const formData = new FormData(event.currentTarget);
    const inputFields = {
      username: formData.get("username"),
      password: formData.get("password"),
    };
    console.log(inputFields);
    dispatch({ type: USER_LOGIN_REQUESTED, payload: inputFields });
  };
  return (
    <Grid
      container
      direction="column"
      component={Paper}
      elevation={3}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "600px",
        margin: "0 auto",
        p: 3,
      }}
    >
      <Grid size={1}>
        <Avatar sx={{ bgcolor: "#429bf5" }}>
          <LockOutlineIcon />
        </Avatar>
      </Grid>
      <Grid size={3}>
        <Typography component="h1" variant="h5" textAlign="center">
          Log in
        </Typography>
      </Grid>
      <Grid
        size={12}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <form method="post" onSubmit={handleLogin} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoFocus
            autoComplete="username"
            sx={{ mb: "20px" }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            id="password"
            autoComplete="current-password"
            sx={{ mb: "20px" }}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword
                          ? "Hide the password"
                          : "Display the password"
                      }
                      onClick={handleClickShowPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mb: "20px" }}
          >
            Login
          </Button>
          <Grid sx={{ m: "0px 20px 5px 5px" }}>
            <Link href="/register" variant="body2">
              Don't have an account? Register.
            </Link>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default LoginForm;
