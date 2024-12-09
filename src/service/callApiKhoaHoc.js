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
  registerCourseAPI: async (infoRegisrer) => {
    return await http.post("/api/QuanLyKhoaHoc/DangKyKhoaHoc", infoRegisrer);
  },
  getCourseByCatetory: async (maDanhMuc) => {
    return await http.get(
      `/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=GP01`
    );
  },
  getListCoursePagination: async (page) => {
    return await http.get(
      `/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${page}&pageSize=12&MaNhom=GP01`
    );
  },
};
