import { useNavigate } from "react-router";
import { Box, AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DropDown from "@/components/global/Header/DropDown";

const Header = ({ title }) => {
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate("/dashboard");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{ p: "2px 2px 2px 0px", m: "2px 2px 20px 0px" }}
      >
        <Toolbar>
          <Box sx={{ display: "flex", width: "100%", alignItems: "center" }}>
            <IconButton
              aria-label="Home"
              onClick={handleHomeClick}
              // sx={{ fontSize: "" }}
              size="large"
            >
              <HomeOutlinedIcon fontSize="30px" />
            </IconButton>
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
