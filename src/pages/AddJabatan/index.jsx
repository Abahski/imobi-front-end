import React, { useState, useEffect } from "react";
import { TextField, Box, Button, MenuItem } from "@mui/material";
import { getDepartment } from "../../lib/api/call/departemen";
import { createJabatan } from "../../lib/api/call/jabatan";

const AddJabatan = () => {
  const [position, setPosition] = useState({
    nama_jabatan: "",
    id_department: "",
  });
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState(""); 

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await getDepartment();
        setDepartments(response.data);
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };

    fetchDepartments();
  }, []);

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    const { nama_jabatan, id_department } = position;

    if (!nama_jabatan || !id_department) {
      console.error("Nama Jabatan and Departemen harus diisi!");
      return;
    }

    const newJabatan = {
      nama_jabatan,
      id_department,
    };

    try {
      const data = await createJabatan(newJabatan);
      console.log("Data saved:", data);
      setPosition({ nama_jabatan: "", id_department: "" });
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const handleChange = (event) => {
    const selectedDeptId = event.target.value;
    setSelectedDepartment(selectedDeptId);
    setPosition({ ...position, id_department: selectedDeptId });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "100vh",
        marginTop: "10vh",
      }}
    >
      <Box sx={{ mb: 5, typography: "h4" }}>Tambah Jabatan</Box>
      <Box sx={{ mb: 5, width: "40%" }}>
        <TextField
          fullWidth
          id="nama-jabatan"
          sx={{ mb: 2 }}
          label="Nama Jabatan"
          value={position.nama_jabatan}
          onChange={(e) =>
            setPosition({ ...position, nama_jabatan: e.target.value })
          }
        />

        <TextField
          select
          fullWidth
          id="department"
          value={position.id_department}
          onChange={handleChange}
          sx={{ mb: 2 }}
          label="Departemen"
        >
          {departments.map((dept) => (
            <MenuItem key={dept.id} value={dept.id}>
              {dept.nama_department}
            </MenuItem>
          ))}
        </TextField>
      </Box>

      <Button onClick={handlePostSubmit} variant="contained">
        Tambah
      </Button>
    </Box>
  );
};

export default AddJabatan;
