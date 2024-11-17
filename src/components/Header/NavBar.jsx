import React from "react";
import { Layout, Menu, Dropdown, Space } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const { Header } = Layout;

// Menu con cho Danh mục
const categoryMenu = (
  <Menu className="bg-green-500 bg-opacity-30 space-y-3">
    <Menu.Item key="1">
      <a
        className="font-bold text-black hover:text-white duration-300 transition-all no-underline"
        href="#"
      >
        LẬP TRÌNH BACKEND
      </a>
    </Menu.Item>
    <Menu.Item key="2">
      <a
        className="font-bold text-black hover:text-white duration-300 transition-all no-underline"
        href="#"
      >
        THIẾT KẾT WEB
      </a>
    </Menu.Item>
    <Menu.Item key="3">
      <a
        className="font-bold text-black hover:text-white duration-300 transition-all no-underline"
        href="#"
      >
        LẬP TRÌNH DI ĐỘNG
      </a>
    </Menu.Item>
    <Menu.Item key="4">
      <a
        className="font-bold text-black hover:text-white duration-300 transition-all no-underline"
        href="#"
      >
        LẬP TRÌNH FRONT END
      </a>
    </Menu.Item>
    <Menu.Item key="5">
      <a
        className="font-bold text-black hover:text-white duration-300 transition-all no-underline"
        href="#"
      >
        LẬP TRÌNH FULL STACK
      </a>
    </Menu.Item>
    <Menu.Item key="6">
      <a
        className="font-bold text-black hover:text-white duration-300 transition-all no-underline"
        href="#"
      >
        TƯ DUY LẬP TRÌNH
      </a>
    </Menu.Item>
  </Menu>
);

// Menu con cho Sự kiện
const eventMenu = (
  <Menu className="bg-green-500 bg-opacity-30 space-y-3">
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

export default function NavBar() {
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
            className="text-black font-bold hover:text-green-500 no-before-after"
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
          >
            KHÓA HỌC
          </Menu.Item>
          <Menu.Item
            key="3"
            className="text-black font-bold hover:text-green-500 no-before-after"
          >
            BLOG
          </Menu.Item>
          <Menu.Item
            key="4"
            className="text-black font-bold hover:text-green-500 no-before-after"
          >
            <Dropdown overlay={eventMenu} trigger={["hover"]}>
              <Space>SỰ KIỆN</Space>
            </Dropdown>
          </Menu.Item>
          <Menu.Item
            key="5"
            className="text-black font-bold hover:text-green-500 no-before-after"
            style={{ whiteSpace: "nowrap", width: "auto" }}
          >
            THÔNG TIN
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
}
