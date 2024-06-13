// src/AllTable.js
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

const data = [
  {
    id: 1,
    nama: "John Doe",
    idJabatan: "JD001",
    umur: 30,
    gender: "Male",
    tanggalLahir: "1993-01-01",
    alamat: "123 Main St",
  },
  {
    id: 2,
    nama: "Jane Smith",
    idJabatan: "JS002",
    umur: 28,
    gender: "Female",
    tanggalLahir: "1995-02-15",
    alamat: "456 Elm St",
  },
  {
    id: 3,
    nama: "John DOeeeeeeeeeeeeeee",
    idJabatan: "JD003",
    umur: 35,
    gender: "Male",
    tanggalLahir: "1988-12-25",
    alamat: "789 Pine St",
  },
  // Tambahkan data lain sesuai kebutuhan
];

const AllTable = () => {
  return (
    <div style={{ marginTop: "10vh" }}>
      <h1 style={{ textAlign: "center", fontWeight: "normal", fontSize:"40px" }}>
        Data Karyawan
      </h1>
      <TableContainer
        component={Paper}
        style={{ maxWidth: "90%", margin: "auto", marginTop: 20 }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                style={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
              >
                Nama
              </TableCell>
              <TableCell
                align="center"
                style={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
              >
                ID Jabatan
              </TableCell>
              <TableCell
                align="center"
                style={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
              >
                Umur
              </TableCell>
              <TableCell
                align="center"
                style={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
              >
                Gender
              </TableCell>
              <TableCell
                align="center"
                style={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
              >
                Tanggal Lahir
              </TableCell>
              <TableCell
                align="center"
                style={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
              >
                Alamat
              </TableCell>
              <TableCell align="center">Aksi</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell
                  style={{
                    borderRight: "1px solid rgba(224, 224, 224, 1)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {row.nama}
                </TableCell>
                <TableCell
                  style={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
                >
                  {row.idJabatan}
                </TableCell>
                <TableCell
                  style={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
                >
                  {row.umur}
                </TableCell>
                <TableCell
                  style={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
                >
                  {row.gender}
                </TableCell>
                <TableCell
                  style={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
                >
                  {row.tanggalLahir}
                </TableCell>
                <TableCell
                  style={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
                >
                  {row.alamat}
                </TableCell>
                <TableCell
                  align="center"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ marginRight: 8 }}
                  >
                    Edit
                  </Button>
                  <Button variant="contained" color="secondary">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AllTable;
