import RootLayout from "./layouts/RootLayout";
import { Route, Routes } from "react-router-dom";
import { AddDepartement } from "./pages/AddDepartemen";
import Home from "./pages/Home";
import AddJabatan from "./pages/AddJabatan";
import AddKaryawan from "./pages/AddKaryawan";
import AllTable from "./pages/AllTable";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/department" element={<AddDepartement />} />
          <Route path="/jabatan" element={<AddJabatan />} />
          <Route path="/karyawan" element={<AddKaryawan />} />
          <Route path="/all-data" element={<AllTable />} />
        </Route>
      </Routes>
  );
};

export default App;
