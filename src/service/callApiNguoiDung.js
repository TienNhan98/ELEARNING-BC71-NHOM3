import http from "./config";

export let callApiNguoiDung = {
  layDanhSachLoaiNguoiDung: () =>
    http.get("/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung"),
  thongTinTaiKhoan: () => http.post("/api/QuanLyNguoiDung/ThongTinTaiKhoan"),
  capNhatThongTinNguoiDung: (data) =>
    http.put("/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung", data),
};
