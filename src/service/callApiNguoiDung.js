import http from "./config";

export let callApiNguoiDung = {
  layDanhSachLoaiNguoiDung: () =>
    http.get("/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung"),
  getUserListsAdmin: async (page) => {
    return await http.get(
      `/api/QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang?MaNhom=GP01&page=${page}&pageSize=10&MaNhom=GP01`
    );
  },

  createUserAdmin: async (dataUser) => {
    return await http.post("/api/QuanLyNguoiDung/ThemNguoiDung", dataUser);
  },
};
