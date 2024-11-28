import http from "./config";

export let callApiKhoaHoc = {
  layDanhSachKhoaHoc: () =>
    http.get("/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01"),
  layDanhMucKhoaHoc: () => http.get("/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc"),
};
