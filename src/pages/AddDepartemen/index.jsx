import { TextField, Box, Button } from "@mui/material";
import { useState } from "react";
import { createDepartment } from "../../lib/api/call/departemen";

export const AddDepartement = () => {
  const [newData, setNewData] = useState({ nama_department: "" });

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    const response = await createDepartment(newData);
    console.log(response);
  };

  return (
    <Box
      sx={{   
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "10vh"
      }}
    >
      <Box sx={{ mb: 5, typography: "h4" }}>Tambah Departemen</Box>
      <form onSubmit={handlePostSubmit} style={{ width: '100%', maxWidth: '400px' }}>
        <Box sx={{ mb: 3 }}>  
          <TextField
            fullWidth
            value={newData.nama_department}
            onChange={(e) =>
              setNewData({ ...newData, nama_department: e.target.value })
            }
            id="outlined-search"
            label="Nama Departemen"
          />
        </Box>
        <Button fullWidth type="submit" variant="contained">
          ADD
        </Button>
      </form>
    </Box>
  );
};

export default AddDepartement;
