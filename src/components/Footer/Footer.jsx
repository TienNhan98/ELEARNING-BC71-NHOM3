import { RightOutlined } from "@ant-design/icons";
import { Col, message, Row } from "antd";
import React from "react";

export default function Footer() {
  return (
    <div className="p-3" style={{ backgroundColor: "#f0f8ff" }}>
      <div className="FooterTop py-3 px-10">
        <Row>
          <Col className="Footer1" span={8}>
            <div className="Footer1 Footer1-top ml-4">
              <a
                href="#"
                className=" no-underline font-bold hover:scale-110 transition-all duration-500"
                style={{
                  fontSize: "20px",
                  color: "black",
                  textShadow: "3px -3px 4px #54d2c0",
                  position: "relative",
                  display: "inline-block",
                }}
              >
                <span
                  className="mr-1 font-bold"
                  style={{
                    fontSize: "40px",
                    color: "#41b294",
                    textShadow: "4px -3px 4px #54d2c0",
                  }}
                >
                  V
                </span>
                learning
                <i
                  class="fa fa-keyboard"
                  style={{
                    fontSize: "20px",
                    position: "absolute",
                    left: "85px",
                    top: "17px",
                  }}
                ></i>
              </a>
            </div>
            <div className="Footer1 Footer1-bot ">
              <ul>
                <li className="flex items-center hover:text-[#41b294] hover:translate-y-[-4px] duration-500 transition-all">
                  <i
                    class="fa fa-phone mr-1 rounded-circle"
                    style={{
                      transform: "scaleX(-1)",
                      display: "inline-block",
                      backgroundColor: "#41b294",
                      color: "white",
                      width: "40px",
                      height: "40px",
                      lineHeight: "40px",
                      fontSize: "12px",
                      textAlign: "center",
                    }}
                  ></i>
                  <span className="font-bold" style={{ fontSize: "16px" }}>
                    1800-123-4567
                  </span>
                </li>
                <li className="flex items-center  hover:text-[#41b294]  hover:translate-y-[-4px] duration-500 transition-all">
                  <i
                    class="fa fa-envelope-open-text mr-1 my-2  rounded-circle"
                    style={{
                      display: "inline-block",
                      backgroundColor: "#41b294",
                      color: "white",
                      width: "40px",
                      height: "40px",
                      lineHeight: "40px",
                      fontSize: "12px",
                      textAlign: "center",
                    }}
                  ></i>
                  <span className="font-bold " style={{ fontSize: "16px" }}>
                    NhanftChieuHocDev@gmail.com
                  </span>
                </li>
                <li
                  className="flex items-center  hover:text-[#41b294]  hover:translate-y-[-4px] duration-500 transition-all"
                  style={{ fontSize: "16px" }}
                >
                  <i
                    class="fa fa-map-marker-alt mr-1  rounded-circle"
                    style={{
                      display: "inline-block",
                      backgroundColor: "#41b294",
                      color: "white",
                      width: "40px",
                      height: "40px",
                      lineHeight: "40px",
                      fontSize: "12px",
                      textAlign: "center",
                    }}
                  ></i>
                  <span className="font-bold ">
                    Sài Gòn - Chợ Lớn - Thủ Đức
                  </span>
                </li>
              </ul>
            </div>
          </Col>
          <Col className="Footer2" span={8}>
            {/* test */}
            <Row>
              <Col span={12}>
                <div className="Footer2 Footer2-left flex items-center">
                  <ul style={{ listStyleType: "none", padding: 0 }}>
                    {/* Tiêu đề "Liên kết" */}
                    <li
                      style={{
                        fontWeight: "bold",
                        fontSize: "25px",
                        marginBottom: "10px",
                      }}
                    >
                      Liên kết
                    </li>

                    {/* Mục danh sách con */}
                    <li
                      className="hover:text-[#41b294]  hover:translate-y-[-4px] duration-500 transition-all"
                      style={{
                        marginBottom: "8px",
                        alignItems: "center",
                        fontWeight: "500",
                        fontSize: "16px",
                      }}
                    >
                      <RightOutlined
                        style={{ marginRight: "3px", fontSize: "12px" }}
                      />
                      Trang chủ
                    </li>
                    <li
                      className="hover:text-[#41b294]  hover:translate-y-[-4px] duration-500 transition-all"
                      style={{
                        marginBottom: "8px",
                        alignItems: "center",
                        fontWeight: "500",
                        fontSize: "16px",
                      }}
                    >
                      <RightOutlined
                        style={{ marginRight: "3px", fontSize: "12px" }}
                      />
                      Dịch vụ
                    </li>
                    <li
                      className="hover:text-[#41b294]  hover:translate-y-[-4px] duration-500 transition-all"
                      style={{
                        marginBottom: "8px",
                        alignItems: "center",
                        fontWeight: "500",
                        fontSize: "16px",
                      }}
                    >
                      <RightOutlined
                        style={{ marginRight: "3px", fontSize: "12px" }}
                      />
                      Nhóm
                    </li>
                    <li
                      className="hover:text-[#41b294]  hover:translate-y-[-4px] duration-500 transition-all"
                      style={{
                        marginBottom: "8px",
                        alignItems: "center",
                        fontWeight: "500",
                        fontSize: "16px",
                      }}
                    >
                      <RightOutlined
                        style={{ marginRight: "3px", fontSize: "12px" }}
                      />
                      Blog
                    </li>
                  </ul>
                </div>
              </Col>
              <Col span={12}>
                <div className="Footer2 Footer2-right flex items-center">
                  <ul style={{ listStyleType: "none", padding: 0 }}>
                    {/* Tiêu đề "Liên kết" */}
                    <li
                      style={{
                        fontWeight: "bold",
                        fontSize: "25px",
                        marginBottom: "10px",
                      }}
                    >
                      Khóa học
                    </li>

                    {/* Mục danh sách con */}
                    <li
                      className="hover:text-[#41b294]  hover:translate-y-[-4px] duration-500 transition-all"
                      style={{
                        marginBottom: "8px",
                        alignItems: "center",
                        fontWeight: "500",
                        fontSize: "16px",
                      }}
                    >
                      <RightOutlined
                        style={{ marginRight: "3px", fontSize: "12px" }}
                      />
                      Front End
                    </li>
                    <li
                      className="hover:text-[#41b294]  hover:translate-y-[-4px] duration-500 transition-all"
                      style={{
                        marginBottom: "8px",
                        alignItems: "center",
                        fontWeight: "500",
                        fontSize: "16px",
                      }}
                    >
                      <RightOutlined
                        style={{ marginRight: "3px", fontSize: "12px" }}
                      />
                      Back End
                    </li>
                    <li
                      className="hover:text-[#41b294]  hover:translate-y-[-4px] duration-500 transition-all"
                      style={{
                        marginBottom: "8px",
                        alignItems: "center",
                        fontWeight: "500",
                        fontSize: "16px",
                      }}
                    >
                      <RightOutlined
                        style={{ marginRight: "3px", fontSize: "12px" }}
                      />
                      Full stack
                    </li>
                    <li
                      className="hover:text-[#41b294]  hover:translate-y-[-4px] duration-500 transition-all"
                      style={{
                        marginBottom: "8px",
                        alignItems: "center",
                        fontWeight: "500",
                        fontSize: "16px",
                      }}
                    >
                      <RightOutlined
                        style={{ marginRight: "3px", fontSize: "12px" }}
                      />
                      Node Js
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Col>
          <Col className="Footer3" span={8}>
            <footer
              style={{
                textAlign: "start",
              }}
            >
              <h2 style={{ fontSize: "25px", fontWeight: "bold" }}>
                Đăng ký tư vấn
              </h2>
              <form className="footer-form">
                <input
                  className="transition-transform duration-500 focus:-translate-x-2"
                  type="text"
                  placeholder="Họ và tên"
                  style={{
                    width: "80%",
                    maxWidth: "400px",
                    padding: "10px",
                    margin: "8px 0",
                    border: "2px solid #41b294",
                    outline: "none" /* Loại bỏ đường viền mặc định */,
                    borderRadius: "5px",
                  }}
                />
                <input
                  className="transition-transform duration-500 focus:-translate-x-2"
                  type="email"
                  placeholder="Email"
                  style={{
                    width: "80%",
                    maxWidth: "400px",
                    padding: "10px",
                    margin: "8px 0",
                    border: "2px solid #41b294",
                    outline: "none" /* Loại bỏ đường viền mặc định */,
                    borderRadius: "5px",
                  }}
                />
                <input
                  className="transition-transform duration-500 focus:-translate-x-2"
                  type="tel"
                  placeholder="Số điện thoại"
                  style={{
                    width: "80%",
                    maxWidth: "400px",
                    padding: "10px",
                    margin: "8px 0",
                    border: "2px solid #41b294",
                    outline: "none" /* Loại bỏ đường viền mặc định */,
                    borderRadius: "5px",
                  }}
                />
                <button
                  type="button"
                  onClick={() => {
                    message.success("Đăng Kí Thành Công");
                  }}
                  style={{
                    width: "25%",
                    padding: "10px",
                    backgroundColor: "#f6ba35",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    fontSize: "20px",
                    cursor: "pointer",
                    marginTop: "10px",
                    transition: "background-color 0.3s",
                  }}
                >
                  Đăng ký
                </button>
              </form>
            </footer>
          </Col>
        </Row>
      </div>
      <div
        className="FooterBot px-10 py-2"
        style={{ borderTop: "1px solid #ccc" }}
      >
        <Row>
          <Col span={12}>
            <div className="FooterBot1">
              <p style={{ fontSize: "16px" }}>
                Copyright © 2021. All rights reserved.
              </p>
            </div>
          </Col>
          <Col span={12}>
            <div className="FooterBot2 space-x-3 flex justify-end">
              <i
                className="fab fa-instagram iconFooter iconSize rounded-circle"
                style={{
                  backgroundColor: "#41b294",
                  color: "white",
                  width: "40px",
                  height: "40px",
                  lineHeight: "40px",
                  fontSize: "15px",
                  textAlign: "center",
                }}
              ></i>
              <i
                className="fab fa-facebook-f iconFooter iconSize rounded-circle"
                style={{
                  backgroundColor: "#41b294",
                  color: "white",
                  width: "40px",
                  height: "40px",
                  lineHeight: "40px",
                  fontSize: "15px",
                  textAlign: "center",
                }}
              ></i>
              <i
                className="fab fa-twitter iconFooter iconSize rounded-circle"
                style={{
                  backgroundColor: "#41b294",
                  color: "white",
                  width: "40px",
                  height: "40px",
                  lineHeight: "40px",
                  fontSize: "15px",
                  textAlign: "center",
                }}
              ></i>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
