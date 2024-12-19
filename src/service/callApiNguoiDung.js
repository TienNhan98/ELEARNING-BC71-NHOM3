import http from "./config";

export let callApiNguoiDung = {
  getUserListsAdmin: async (page) => {
    return await http.get(
      `/api/QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang?MaNhom=GP01&page=${page}&pageSize=10&MaNhom=GP01`
    );
  },

  createUserAdmin: async (dataUser) => {
    return await http.post("/api/QuanLyNguoiDung/ThemNguoiDung", dataUser);
  },
  getUserListAll: async () => {
    return await http.get(
      `/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`
    );
  },
  updateUser: (dataUser) =>
    http.put("/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung", dataUser),

  deleteUser: (userId) =>
    http.delete(`/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${userId}`),
};
