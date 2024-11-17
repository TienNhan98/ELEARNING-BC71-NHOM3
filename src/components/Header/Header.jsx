import React from "react";
import logo from "../../asset/logo/logo.png";
import avt from "../../asset/avt.jpg";
import Search from "antd/es/transfer/search";
import { PoweroffOutlined, SearchOutlined } from "@ant-design/icons";
import NavBar from "./NavBar";
import { Dropdown } from "antd";

export default function Header() {
  const handleLogout = () => {
    console.log("Đăng xuất...");
    // Thêm logic đăng xuất tại đây (ví dụ: xóa token, chuyển hướng)
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
      </div>
      {/* <div className="flex justify-end items-center ml-4 chuaDangNhap">
        <button className="btn btn-warning font-bold text-white hover:scale-105 duration-300 transition-all">
          ĐĂNG NHẬP
        </button>
      </div> */}
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
            placement="rightCenter" // Đặt dropdown sang bên phải của ảnh
          >
            <a className="_blank" href="#" onClick={(e) => e.preventDefault()}>
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
    </div>
  );
}
