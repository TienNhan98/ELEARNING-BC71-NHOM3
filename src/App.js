import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import StudentLayout from "./template/layouts/student-layout";

// import ListCoursesByCat from "./pages/student/list-courses-by-cat/list-courses-by-cat";  check lại
import CourseDetail from "./pages/student/courses/course-detail/course-detail";
// import AuthGuard from "./guard/auth-guard"; check lại
import AdminGuard from "./guard/admin-guard";
import AdminLayout from "./template/layouts/admin-layout";
import AdminListCourses from "./pages/admin/courses/list-courses";
import StudentHome from "./pages/student/home/student-home";
import LoginPage from "./pages/LoginPage/LoginPage";
import SearchResultsPage from "./pages/student/SearchResultsPage/SearchResultsPage";
import CatetoryCourse from "./pages/student/catetory-course/catetory-course";
import CourseAll from "./pages/student/courses/course-all/course-all";
import PersonalInfo from "./pages/PersonalInfo/PersonalInfo";
import NotFoundLayout from "./pages/notFoundPage/NotFoundLayout";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Login routes */}
          <Route path="/login" element={<LoginPage />} />

          {/* Client routes */}
          <Route path="/" element={<StudentLayout />}>
            <Route index element={<StudentHome />} />

            {/* Hiển thị tại / */}
            <Route
              path="/danhmuckhoahoc/:maDanhMuc"
              element={<CatetoryCourse />}
            />
            <Route
              path="/timkiem/:searchValue"
              element={<SearchResultsPage />}
            />
            {/* route chi tiết */}
            <Route path="/chitiet/:maKhoaHoc" element={<CourseDetail />} />

            {/* route hiển thị tất cả khóa học */}
            <Route path="/khoahoc" element={<CourseAll />} />

            {/* route thông tin cá nhân */}
            <Route path="/thongtincanhan" element={<PersonalInfo />} />
          </Route>

          {/* Admin routes */}
          <Route
            path="/admin"
            element={
              <AdminGuard>
                <AdminLayout />
              </AdminGuard>
            }
          >
            <Route index element={<AdminListCourses />} />
          </Route>

          {/* Not Found Route */}
          <Route path="*" element={<NotFoundLayout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
