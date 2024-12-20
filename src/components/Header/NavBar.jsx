import React, { useEffect, useState } from "react";
import { Layout, Menu, Dropdown, Space } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryCourses } from "../../redux/courseSlice";

export default function NavBar() {
  const { Header } = Layout;
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoryCourses());
  }, []);

  const { categories } = useSelector((state) => {
    console.log(state.courseSlice);
    return state.courseSlice;
  });

  // Menu con cho Danh mục
  const categoryMenu = (
    <Menu className="bg-[#41b294] bg-opacity-30 space-y-3">
      {categories.map((item) => (
        <Menu.Item key={item.maDanhMuc || item.tenDanhMuc}>
          <NavLink
            to={`/danhmuckhoahoc/${item.maDanhMuc}`}
            className="font-bold text-black hover:text-white duration-300 transition-all no-underline uppercase "
          >
            {item.tenDanhMuc}
          </NavLink>
        </Menu.Item>
      ))}
    </Menu>
  );
  // Menu con cho Sự kiện
  const eventMenu = (
    <Menu className="bg-[#41b294] bg-opacity-30 space-y-3">
      <Menu.Item key="1">
        <a
          className="font-bold text-black hover:text-white duration-300 transition-all no-underline"
          href="#"
        >
          SỰ KIỆN SALE CUỐI NĂM
        </a>
      </Menu.Item>
      <Menu.Item key="2">
        <a
          className="font-bold text-black hover:text-white duration-300 transition-all no-underline"
          href="#"
        >
          SỰ KIỆN GIÁNG SINH
        </a>
      </Menu.Item>
      <Menu.Item key="3">
        <a
          className="font-bold text-black hover:text-white duration-300 transition-all no-underline"
          href="#"
        >
          SỰ KIỆN TÌNH YÊU
        </a>
      </Menu.Item>
    </Menu>
  );
  return (
    <Layout className="">
      <Header className="bg-transparent px-0 w-full">
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          className="float-right min-w-[520px]"
          style={{
            border: "none",
            whiteSpace: "nowrap ",
            lineHeight: "64px",
            flex: "none",
          }}
        >
          <Menu.Item
            key="1"
            className="text-black font-bold hover:text-[#41b294] no-before-after"
          >
            <Dropdown overlay={categoryMenu} trigger={["hover"]}>
              <Space>
                <MenuOutlined />
                DANH MỤC
              </Space>
            </Dropdown>
          </Menu.Item>
          <Menu.Item
            key="2"
            className="text-black font-bold hover:text-green-500 no-before-after"
            onClick={() => {
              navigate("/khoahoc");
            }}
          >
            KHÓA HỌC
          </Menu.Item>
          <Menu.Item
            key="3"
            className="text-black font-bold hover:text-[#41b294] no-before-after"
          >
            BLOG
          </Menu.Item>
          <Menu.Item
            key="4"
            className="text-black font-bold hover:text-[#41b294] no-before-after"
          >
            <Dropdown overlay={eventMenu} trigger={["hover"]}>
              <Space>SỰ KIỆN</Space>
            </Dropdown>
          </Menu.Item>
          <Menu.Item
            key="5"
            className="text-black font-bold hover:text-[#41b294] no-before-after"
            style={{ whiteSpace: "nowrap", width: "auto" }}
          >
            THÔNG TIN
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
}
