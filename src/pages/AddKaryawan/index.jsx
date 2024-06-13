import { useState, useEffect } from "react";
import { TextField, Box, Button, MenuItem } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { getJabatanByDepartmentId } from "../../lib/api/call/jabatan";
import { getDepartment } from "../../lib/api/call/departemen";
import { createKaryawan, getKaryawanById, updateKaryawan } from "../../lib/api/call/karyawan";

const AddKaryawan = () => {
  const [nama, setNama] = useState("");
  const [umur, setUmur] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState(null);
  const [alamat, setAlamat] = useState("");
  const [departments, setDepartments] = useState([]);
  const [positions, setPositions] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedJabatan, setSelectedJabatan] = useState("");

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await getDepartment();
        console.log(response);
        setDepartments(response.data);
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };

    fetchDepartments();
  }, []);

  useEffect(() => {
    const fetchJabatan = async () => {
      if (selectedDepartment) {
        try {
          const data = await getJabatanByDepartmentId(selectedDepartment);
          console.log("Hasilnya ", data);
          setPositions(data);
        } catch (error) {
          console.error("Error fetching jabatan:", error);
        }
      }
    };

    fetchJabatan();
  }, [selectedDepartment]);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleTanggalLahirChange = (date) => {
    setTanggalLahir(date);
  };

  const handleAddKaryawan = () => {
    const karyawanData = {
      nama: nama,
      id_jabatan: selectedJabatan,
      umur: umur,
      gender: selectedValue,
      tanggal_lahir: tanggalLahir ? tanggalLahir.format("YYYY-MM-DD") : null,
      alamat: alamat,
    };

    createKaryawan(karyawanData)
      .then((response) => {
        console.log("Karyawan berhasil ditambahkan:", response);
      })
      .catch((error) => {
        console.error("Error adding karyawan:", error);
      });
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
      <Box sx={{ mb: 5, typography: "h4" }}>Tambah Karyawan</Box>
      <Box sx={{ mb: 5, width: "40%" }}>
        <TextField
          fullWidth
          id="nama"
          sx={{ mb: 2 }}
          label="Nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
        <TextField
          fullWidth
          id="umur"
          sx={{ mb: 2 }}
          label="Usia"
          type="number"
          value={umur}
          onChange={(e) => setUmur(e.target.value)}
        />
        <FormLabel sx={{ mb: 1 }} id="jenis-kelamin-label">
          Jenis Kelamin
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="jenis-kelamin-label"
          name="jenis-kelamin-group"
          sx={{ mb: 2 }}
          value={selectedValue}
          onChange={handleChange}
        >
          <FormControlLabel
            value="female"
            control={<Radio />}
            label="Perempuan (P)"
          />
          <FormControlLabel
            value="male"
            control={<Radio />}
            label="Laki-laki (L)"
          />
        </RadioGroup>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Tanggal lahir"
            value={tanggalLahir}
            onChange={handleTanggalLahirChange}
            renderInput={(params) => <TextField {...params} sx={{ mb: 2 }} />}
          />
        </LocalizationProvider>
        <TextField
          fullWidth
          id="alamat"
          sx={{ mb: 2, mt: 2 }}
          label="Alamat"
          value={alamat}
          onChange={(e) => setAlamat(e.target.value)}
        />
        <TextField
          select
          fullWidth
          id="department"
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)}
          sx={{ mb: 2 }}
          label="Departemen"
        >
          <MenuItem value="">Pilih Departemen</MenuItem>
          {departments.map((dept) => (
            <MenuItem key={dept.id} value={dept.id}>
              {dept.nama}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          fullWidth
          id="jabatan"
          value={selectedJabatan}
          onChange={(e) => setSelectedJabatan(e.target.value)}
          label="Jabatan"
        >
          <MenuItem value="">Pilih Jabatan</MenuItem>
          {positions.map((pos) => (
            <MenuItem key={pos.id} value={pos.id}>
              {pos.nama_jabatan}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <Button onClick={handleAddKaryawan} variant="contained">
        ADD
      </Button>
    </Box>
  );
};

export default AddKaryawan;
