import { AppBar, Toolbar, Grid, Typography } from "@mui/material";
import DropDown from "@/components/global/Header/DropDown";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{ p: "2px 2px 2px 0px", m: "2px 2px 20px 0px" }}
    >
      <Toolbar>
        <Grid size={11}>
          <Typography variant="h6" component="div">
            My To-Do List
          </Typography>
        </Grid>
        <Grid size={1} sx={{ textAlign: "end" }}>
          <DropDown />
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
