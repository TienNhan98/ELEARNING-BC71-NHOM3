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
  const [isScrolled, setIsScrolled] = useState(false);
  let user = useSelector((state) => state.userSlice.dataLogin);
  let navigate = useNavigate();

  // Lắng nghe sự kiện scroll để cập nhật trạng thái
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  const handleLogout = () => {
    localStorage.removeItem("USER_LOGIN");
    window.location.href = "/login";
  };

  const dropdownContent = (
    <div
      onClick={handleLogout}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        cursor: "pointer",
      }}
      className="absolute top-0 left-1/2 transform -translate-x-1/2 hover:top-0 transition-all duration-500 ease-in-out  hover:bg-gray-200"
    >
      <PoweroffOutlined
        style={{
          fontSize: "24px",
          color: "#f6ba35",
          fontWeight: "bold",
        }}
      />
    </div>
  );

  let renderMenu = () => {
    if (user) {
      return (
        <div className="daDangNhap relative">
          <div className="relative flex items-center gap-4">
            {user.maLoaiNguoiDung === "GV" && (
              <div
                onClick={() => navigate("/admin")}
                className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer hover:bg-gray-200 transition-all duration-300"
              >
                <i className="fas fa-cog text-xl text-[#f6ba35] font-bold"></i>
              </div>
            )}

            <div className="relative">
              <Dropdown
                overlay={dropdownContent}
                trigger={["hover"]}
                placement="bottomCenter"
              >
                <a
                  className="_blank"
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
              </Dropdown>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex justify-end items-center ml-4 chuaDangNhap">
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
    <div
      className={`${
        isScrolled
          ? "fixed top-0 left-0 w-full bg-white shadow-md z-50 opacity-100"
          : "relative opacity-90"
      } transition-all duration-500 ease-in-out`}
    >
      <div className="flex flex-col md:flex-row items-center justify-between px-4 py-2">
        {/* Logo */}
        <a
          href="#"
          className="inline-block mb-2 md:mb-0 mr-2"
          onClick={() => navigate("/")}
        >
          <img src={logo} alt="Logo" className="w-32 md:w-48 lg:w-60" />
        </a>

        {/* Search */}
        <div className="w-full md:w-auto flex justify-center items-center mb-2 md:mb-0">
          <SearchLogicComponent onSearch={handleSearch} />
        </div>

        {/* NavBar & User Menu */}
        <div className="flex flex-col sm:flex-row justify-end items-center w-full  md:w-auto ml-0 md:ml-4 lg:ml-64 gap-2">
          <NavBar />
          {renderMenu()}
        </div>
      </div>
    </div>
  );
}
