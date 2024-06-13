import API from "..";

export const createKaryawan = async(data) => {
    return await API.post("karyawan", data)
}

export const getKaryawan = async() => {
    return await API.get("karyawan")
}

export const updateKaryawan = async(id) => {
    return await API.put(`karyawan/${id}`)
}

export const getKaryawanById = async(id) => {
    return await API.put(`karyawan/${id}`)
}