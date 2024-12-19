import http from "./config";

export const callApiKhoaHoc = {
  layDanhSachKhoaHoc: () =>
    http.get("/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01"),
  layDanhMucKhoaHoc: () => http.get("/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc"),

  layChiTietKhoaHoc: (maKhoaHoc) =>
    http.get(`/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`),

  registerCourseAPI: (infoRegister) =>
    http.post("/api/QuanLyKhoaHoc/DangKyKhoaHoc", infoRegister),

  getCourseByCatetory: (maDanhMuc) =>
    http.get(
      `/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=GP01`
    ),

  getListCoursePagination: (page) =>
    http.get(
      `/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${page}&pageSize=12&MaNhom=GP01`
    ),

  getCourseListAdmin: (page) =>
    http.get(
      `/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${page}&pageSize=10&MaNhom=GP01`
    ),

  addCourse: (data) => http.post("/api/QuanLyKhoaHoc/ThemKhoaHoc", data),

  addCourseHasImage: (formdata) =>
    http.post("/api/QuanLyKhoaHoc/ThemKhoaHocUploadHinh", formdata),

  updateCourseHasImage: (formdata) =>
    http.post("/api/QuanLyKhoaHoc/CapNhatKhoaHocUpload", formdata),

  updateCourse: (formdata) =>
    http.put(`/api/QuanLyKhoaHoc/CapNhatKhoaHoc`, formdata),

  deleteCourse: (coueseId) =>
    http.delete(`/api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${coueseId}`),
};
