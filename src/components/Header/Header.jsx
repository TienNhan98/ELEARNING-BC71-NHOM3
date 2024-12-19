import React, { useState, useEffect } from "react";
import logo from "../../asset/logo/logo.png";
import avt from "../../asset/avt.jpg";
import { PoweroffOutlined } from "@ant-design/icons";
import NavBar from "./NavBar";
import { Dropdown } from "antd";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import SearchLogicComponent from "./SearchLogicComponent";
import { normalizeString } from "../../untils/normalize"; // Thêm import hàm normalize
import { callApiKhoaHoc } from "../../service/callApiKhoaHoc";

export default function Header() {
  let user = useSelector((state) => state.userSlice.dataLogin);
  let navigate = useNavigate();

  // Xử lý tìm kiếm và điều hướng
  const handleSearch = async (value) => {
    const normalizedValue = normalizeString(value); // Chuẩn hóa giá trị tìm kiếm
    if (!normalizedValue || normalizedValue.length === 0) {
      // console.error("Giá trị tìm kiếm trống!");
      return; // Không thực hiện điều hướng nếu giá trị rỗng
    }
    try {
      const response = await callApiKhoaHoc.layDanhSachKhoaHoc();
      const allCourses = response.data;

      // Lọc khóa học dựa trên tenDanhMucKhoaHoc
      const filteredCourses = allCourses.filter((course) => {
        const normalizedCourseName = normalizeString(
          course.danhMucKhoaHoc.tenDanhMucKhoaHoc
        );

        return normalizedCourseName.includes(normalizedValue);
      });
      // Nếu không có kết quả tìm kiếm, hiển thị 6 khóa học ngẫu nhiên
      if (filteredCourses.length === 0) {
        // Shuffle danh sách allCourses để lấy khóa học ngẫu nhiên
        const shuffledCourses = allCourses.sort(() => 0.5 - Math.random());
        // Lấy 6 khóa học ngẫu nhiên
        filteredCourses.push(...shuffledCourses.slice(0, 6));
      }
      // Điều hướng đến trang tìm kiếm với tham số tìm kiếm
      navigate(`/timkiem/${normalizedValue}`, {
        state: { results: filteredCourses },
      });
    } catch (error) {
      console.error("Lỗi khi gọi API:", error);
    }
  };

  const handleClick = (e) => {
    navigate("/");
  };

  const handleLogout = () => {
    localStorage.removeItem("USER_LOGIN");
    window.location.href = "/login";
  };

  const dropdownContent = (
    <div
      onClick={handleLogout}
      className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer bg-white shadow-md"
    >
      <PoweroffOutlined className="text-[24px] text-[#f6ba35] font-bold" />
    </div>
  );

  let renderMenu = () => {
    if (user) {
      return (
        <div className="flex items-center justify-end p-4">
          <Dropdown
            overlay={dropdownContent}
            trigger={["hover"]}
            placement="rightTop"
            overlayStyle={{
              top: "50px",
              left: "1460px",
              position: "absolute",
            }}
          >
            <div className="flex items-center space-x-4 h-16">
              {/* Biểu tượng cài đặt nếu là GV */}
              {user.maLoaiNguoiDung === "GV" && (
                <span className="flex items-center">
                  <NavLink to="/admin">
                    <i className="fas fa-cog cursor-pointer text-xl text-[#f6ba35]" />
                  </NavLink>
                </span>
              )}

              {/* Avatar và liên kết thông tin cá nhân */}
              <a
                className="flex items-center"
                onClick={() => {
                  navigate("/thongtincanhan");
                }}
              >
                <img
                  className="border rounded-full object-cover opacity-90 hover:opacity-100 duration-300 transition-all w-16 h-16 cursor-pointer"
                  src={avt}
                  alt="Avatar"
                />
              </a>
            </div>
          </Dropdown>
        </div>
      );
    } else {
      return (
        <div className="flex justify-end items-center ml-4 ">
          <NavLink
            to="/login"
            className="btn btn-warning font-bold text-white hover:scale-105 duration-300 transition-all"
          >
            ĐĂNG NHẬP
          </NavLink>
        </div>
      );
    }
  };

  return (
    <div className="m-3 flex justify-center items-center">
      <a href="#" className="inline-block mr-2" onClick={handleClick}>
        <div className=" transform transition-transform duration-300 hover:scale-105">
          <img src={logo} alt="Logo" style={{ width: 250 }} />
        </div>
      </a>
      <div className=" ml-2 flex justify-center items-center">
        <SearchLogicComponent onSearch={handleSearch} />
      </div>
      <div className="flex justify-end items-center ml-64">
        <NavBar />
        <div>{renderMenu()}</div>
      </div>
    </div>
  );
}
