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

const Register = () => {
  function handleRegister() {}
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
            Register
          </Typography>
          <form noValidate>
            <TextField
              onChange={(event) => handleAccount("firstName", event)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              autoFocus
            />
            <TextField
              onChange={(event) => handleAccount("lastName", event)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="firstlastNameName"
              label="Last Name"
              name="lastName"
            />
            <TextField
              onChange={(event) => handleAccount("email", event)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
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
              onClick={handleRegister}
            >
              Login
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/" variant="body2">
                  Already a user? Log in.
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Register;
