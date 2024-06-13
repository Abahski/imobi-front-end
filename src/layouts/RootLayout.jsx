import { Box } from "@mui/material";
import { Navbar } from "../components/navbar";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

const RootLayout = () => {
  const location = useLocation();

  return (
    <Box>
      <Navbar />
      <Outlet />
    </Box>
  );
};

export default RootLayout;
