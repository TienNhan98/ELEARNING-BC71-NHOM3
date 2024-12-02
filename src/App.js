import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import StudentLayout from "./template/layouts/student-layout";

import ListCoursesByCat from "./pages/student/list-courses-by-cat/list-courses-by-cat";
import CourseDetail from "./pages/student/courses/course-detail/course-detail";
import AuthGuard from "./guard/auth-guard";
import AdminGuard from "./guard/admin-guard";
import AdminLayout from "./template/layouts/admin-layout";
import AdminListCourses from "./pages/admin/courses/list-courses";
import StudentHome from "./pages/student/home/student-home";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFoundLayout from "./pages/notFoundPage/not-found";

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
              element={
                <AuthGuard>
                  {/* vấn đề nó lại nằm ở đây */}
                  <ListCoursesByCat />
                </AuthGuard>
              }
            />
            <Route path="/chitiet/:maKhoaHoc" element={<CourseDetail />} />
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
