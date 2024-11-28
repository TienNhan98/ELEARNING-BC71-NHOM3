import http from "./config";

export let callApiNguoiDung = {
  layDanhSachLoaiNguoiDung: () =>
    http.get("/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung"),
};
