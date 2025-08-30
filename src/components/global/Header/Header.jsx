import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import DropDown from "@/components/global/Header/DropDown";

const Header = ({ title }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{ p: "2px 2px 2px 0px", m: "2px 2px 20px 0px" }}
      >
        <Toolbar>
          <Box sx={{ display: "flex", width: "100%", alignItems: "center" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {title}
            </Typography>
            <DropDown />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
