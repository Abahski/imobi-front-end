    import API from "..";

export const createDepartment = async (data) => {
  return await API.post("department", data);
};

export const getDepartment = async() => {
    return await API.get("department")
}
