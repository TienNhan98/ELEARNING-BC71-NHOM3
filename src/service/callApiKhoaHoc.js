import http from "./config";

export let callApiKhoaHoc = {
  layDanhSachKhoaHoc: () =>
    http.get("/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01"),
  layDanhMucKhoaHoc: () => http.get("/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc"),
  layChiTietKhoaHoc: (maKhoaHoc) => {
    return http.get(
      `/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`
    );
  },
  registerCourseAPI: (infoRegisrer) => {
    return http.post("/api/QuanLyKhoaHoc/DangKyKhoaHoc", infoRegisrer);
  },
  getCourseByCatetory: (maDanhMuc) => {
    return http.get(
      `/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=GP01`
    );
  },
};
