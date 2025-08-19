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

const Register = () => {
  const { register } = useAuth();
  const handleRegister = async (event) => {
    event.preventDefault();
    // Get form data:
    const formData = new FormData(event.currentTarget);
    const inputFields = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    await register(inputFields);
  };
  function handleAccount() {}
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
          Register
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
        <form onSubmit={handleRegister}>
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
            sx={{ mb: "20px" }}
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
            sx={{ mb: "20px" }}
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
            sx={{ mb: "20px" }}
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
            sx={{ mb: "20px" }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleRegister}
            sx={{ mb: "20px" }}
          >
            Register
          </Button>
          <Grid sx={{ m: "0px 20px 5px 5px" }}>
            <Link href="/" variant="body2">
              Already a user? Log in.
            </Link>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default Register;
