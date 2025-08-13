import {
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
} from "@mui/material";

const Dashboard = () => {
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <List>
        <ListItem>
          <ListItemText primary="Banana" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Apple" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Dashboard;
