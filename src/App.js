import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import StudentLayout from "./template/layouts/student-layout";

import CourseDetail from "./pages/student/courses/course-detail/course-detail";
import AuthGuard from "./guard/auth-guard";
import AdminGuard from "./guard/admin-guard";
import AdminLayout from "./template/layouts/admin-layout";

import StudentHome from "./pages/student/home/student-home";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFoundLayout from "./pages/notFoundPage/not-found";
import CatetoryCourse from "./pages/student/catetory-course/catetory-course";
import CourseAll from "./pages/student/courses/course-all/course-all";
import Spiner from "./components/Spinner/Spinner";
import ManageUsers from "./pages/admin/users/ManageUsers";
import ManageCourses from "./pages/admin/courses/ManageCourses ";

export default function App() {
  return (
    <div>
      <Spiner />
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
            {/* route chi tiết */}
            <Route path="/chitiet/:maKhoaHoc" element={<CourseDetail />} />

            {/* route hiển thị tất cả khóa học */}
            <Route path="/khoahoc" element={<CourseAll />} />
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
            <Route index element={<Navigate to="quanlynguoidung" />} />
            <Route path="quanlynguoidung" element={<ManageUsers />} />
            <Route path="quanlykhoahoc" element={<ManageCourses />} />
          </Route>

          {/* Not Found Route */}
          <Route path="*" element={<NotFoundLayout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
