import { Typography, Box } from "@mui/material";

const Home = () => {
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
      <Typography>Selamat Datang</Typography>
      <Typography>
        Silahkan klik yang ada pada navigation bar yang ada di atas untuk
        menambah data sesuai keinginan
      </Typography>
      <Typography>
        Klik "Lihat Semua" untuk melihat semua data karyawan yang sudah dimasukkan
      </Typography>
      <Box
        component="img"
        src="C:\Users\Reza\Desktop\Teknikal Test\PT. Imobi Solusi Prima\frontend\src\assets\imobi.png"
        alt="Company Logo"
        sx={{ height: 40, width: 40, mr: 1 }}
      />
    </Box>
  );
};

export default Home;
