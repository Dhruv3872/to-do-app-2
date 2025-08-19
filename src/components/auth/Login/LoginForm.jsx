import {
  Paper,
  Avatar,
  Button,
  TextField,
  Typography,
  Grid,
  Link,
} from "@mui/material";
import LockOutlineIcon from "@mui/icons-material/LockOutline";
import useAuth from "../../../services/useAuth";

const LoginForm = () => {
  const { login } = useAuth();
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
    await login(inputFields);
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
            sx={{ mb: "20px" }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            sx={{ mb: "20px" }}
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
