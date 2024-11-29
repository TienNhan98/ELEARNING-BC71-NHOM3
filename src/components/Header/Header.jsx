import React from "react";
import logo from "../../asset/logo/logo.png";
import avt from "../../asset/avt.jpg";
import Search from "antd/es/transfer/search";
import { PoweroffOutlined, SearchOutlined } from "@ant-design/icons";
import NavBar from "./NavBar";
import { Dropdown } from "antd";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  let user = useSelector((state) => state.userSlice.dataLogin);
  let navigate = useNavigate();

  const handleLogout = () => {
    //1. xóa localStorage
    localStorage.removeItem("USER_LOGIN");
    //2. đá ra trang Login
    window.location.href = "/login";
  };

  const dropdownContent = (
    <div
      onClick={handleLogout}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        cursor: "pointer",
      }}
      className="animate-slide-left-to-right"
    >
      <PoweroffOutlined
        style={{
          fontSize: "24px",
          color: "#f6ba35",
          font: "bold",
        }}
      />
    </div>
  );

  let renderMenu = () => {
    if (user) {
      return (
        <div className="daDangNhap">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "20px",
            }}
          >
            <Dropdown
              overlay={dropdownContent}
              trigger={["hover"]}
              placement="rightCenter"
            >
              <a
                className="_blank"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                <img
                  className="border rounded-circle object-fit object-cover opacity-90 hover:opacity-100 duration-300 transition-all"
                  style={{ width: "70px", height: "70px", cursor: "pointer" }}
                  src={avt}
                  alt="Avatar"
                />
              </a>
            </Dropdown>
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

  const onSearch = (value, _e, info) => console.log(info?.source, value);
  return (
    <div className="m-3 flex justify-center items-center">
      <a href="#" className="inline-block mr-2">
        <div className=" transform transition-transform duration-300 hover:scale-105">
          <img src={logo} alt="Logo" style={{ width: 250 }} />
        </div>
      </a>
      <div className=" ml-2 flex justify-center items-center">
        <Search
          activeBorderColor="#52c41a"
          hoverBorderColor="#52c41a"
          placeholder="Tìm Kiếm"
          suffix={<SearchOutlined />}
          allowClear
          onSearch={onSearch}
          style={{
            width: 500,
          }}
        />
      </div>
      <div className="flex justify-end items-center ml-64">
        <NavBar />
        <div>{renderMenu()}</div>
      </div>
    </div>
  );
}
