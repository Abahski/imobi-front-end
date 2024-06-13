import {
  AppBar,
  Button,
  Icon,
  Stack,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Icon></Icon>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Typography variant="body1" sx={{ ml: 1 }}>
              PT. Imobi Solusi Prima
            </Typography>
          </Link>
        </Box>
        <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
          <Link
            to="/karyawan"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography variant="body1">Karyawan</Typography>
          </Link>
          <Link
            to="/jabatan"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography variant="body1">Jabatan</Typography>
          </Link>
          <Link
            to="/department"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography variant="body1">Departemen</Typography>
          </Link>
          <Link
            to="/all-data"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography variant="body1">All Data</Typography>
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
