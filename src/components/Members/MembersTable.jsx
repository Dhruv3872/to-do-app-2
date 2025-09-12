import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
const columns = [
  { field: "name", headerName: "Name", width: 90 },
  { field: "role", headerName: "Role", width: 90 },
  { field: "actions", headerName: "Actions", width: 90 },
];

const MembersTable = () => {
  return (
    <Box sx={{ height: 400, width: "80%" }}>
      <DataGrid columns={columns} />
    </Box>
  );
};

export default MembersTable;
