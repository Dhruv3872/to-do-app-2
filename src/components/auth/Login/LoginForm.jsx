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
  //   const classes = useStyles();
  function handleLogin() {}
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
      {/* <form action={submit}>
      <input name="email" />
      <input name="password" />
      <button type="submit">Search</button>
    </form> */}
      <Grid
        item
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
          <form noValidate>
            <TextField
              onChange={(event) => handleAccount("email", event)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleLogin}
            >
              Login
            </Button>
            <Grid container>
              <Grid item>
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
