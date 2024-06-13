import API from "..";

export const createJabatan = async (data) => {
  return await API.post("/jabatan", data);
};

export const getJabatanByDepartmentId = async (departmentId) => {
  return await API.get(`/jabatan/department/${departmentId}`);
};
