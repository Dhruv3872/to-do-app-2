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
// import theme from "../../../themes/theme";
// import Avatar from "@mui/material";
// import Avatar from "@mui/material";

/* const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
})); */

const LoginForm = () => {
  const { login } = useAuth();
  //   const classes = useStyles();
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
  function handleAccount() {}
  /* function submit(formData) {
    const query = formData.get("query");
    alert(`You searched for '${query}'`);
  } */
  return (
    <Grid
      container
      component="main"
      display="flex"
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      <Grid
        component={Paper}
        elevation={1}
        square
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <div>
          <Avatar>
            <LockOutlineIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <form method="post" onSubmit={handleLogin} noValidate>
            <TextField
              onChange={(event) => handleAccount("username", event)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoFocus
            />
            <TextField
              onChange={(event) => handleAccount("password", event)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button type="submit" fullWidth variant="contained" color="primary">
              Login
            </Button>
            <Grid container>
              <Grid>
                <Link href="/register" variant="body2">
                  Don't have an account? Register.
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default LoginForm;
