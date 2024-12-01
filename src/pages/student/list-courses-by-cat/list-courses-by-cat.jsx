import { Card, Col, Popover, Row, Tooltip } from "antd";
import Meta from "antd/es/card/Meta";
import React, { useEffect, useState } from "react";
import { callApiKhoaHoc } from "../../../service/callApiKhoaHoc";
import { NavLink, useNavigate } from "react-router-dom";
import avtELM from "./asset/avaElonmuck.png";
import avtPPV from "./asset/avaPPV.png";

export default function ListCoursesByCat() {
  let navigate = useNavigate();
  const [listKhoaHoc, setListKhoaHoc] = useState([]);
  // console.log("🚀 ~ ListCoursesByCat ~ listKhoaHoc:", listKhoaHoc);
  useEffect(() => {
    callApiKhoaHoc
      .layDanhSachKhoaHoc()
      .then((result) => {
        // console.log(result.data);
        setListKhoaHoc(result.data);
      })
      .catch((err) => {});
  }, []);

  const topKhoaHocPhoBien = listKhoaHoc.slice(0, 4);
  const khoaHocThamKhao = listKhoaHoc.slice(10, 14);
  const cacKhoaHoc = listKhoaHoc.slice(30, 34);
  const chiLayMot = listKhoaHoc.slice(0, 1);

  //   <div>
  //     {topKhoaHocPhoBien.map((item) => {
  //       return (
  //         <Card
  //           style={{
  //             width: 300,
  //           }}
  //         >
  //           <div className="flex items-center">
  //             <img src={avtPPV} width={"40px"} alt="" />
  //             <span className="ml-2 font-bold" style={{ color: "#8C8C8C" }}>
  //               Elun Musk Ricard
  //             </span>
  //           </div>
  //           <div className="my-3">
  //             <p className="font-bold">
  //               BOOTCAMP - LẬP TRÌNH FULL STACK TỪ ZERO ĐẾN CÓ VIỆC
  //             </p>
  //           </div>
  //           <div className="mb-3" style={{ color: "#8C8C8C" }}>
  //             <p>
  //               Đã có hơn 6200 bạn đăng kí học và có việc làm thông qua chương
  //               trình đào tạo Bootcamp Lập trình Front End chuyên nghiệp. Khóa
  //               học 100% thực hành cường độ cao theo dự án thực tế và kết nối
  //               doanh nghiệp hỗ trợ tìm việc ngay sau khi học...
  //             </p>
  //           </div>
  //           <div
  //             className="flex justify-between items-center mb-3 space-x-2"
  //             style={{
  //               fontSize: "16px",
  //               color: "#8c8c8c",
  //             }}
  //           >
  //             <span>
  //               <i
  //                 className="far fa-clock mr-1"
  //                 style={{
  //                   color: "#f5c002",
  //                 }}
  //               ></i>
  //               8 giờ
  //             </span>
  //             <span>
  //               <i
  //                 className="far fa-calendar-alt mr-1"
  //                 style={{ color: "#f06f68" }}
  //               ></i>
  //               4 Tuần
  //             </span>
  //             <span>
  //               <i
  //                 className="fas fa-signal mr-1"
  //                 style={{ color: "#65c9ff" }}
  //               ></i>
  //               Tất Cả
  //             </span>
  //           </div>
  //           <div className="mt-3">
  //             <NavLink
  //               className="no-underline block w-full h-full bg-[#41b294] text-white text-center py-3"
  //               to={`/chitiet/${item.maKhoaHoc}`}
  //             >
  //               Xem Chi Tiết
  //             </NavLink>
  //           </div>
  //         </Card>
  //       );
  //     })}
  //   </div>
  // );

  return (
    <div>
      {/* topKhoaHocPhoBien */}
      <a href="#" className="no-underline inline-block ml-5 mt-3">
        <p
          className="font-bold"
          style={{
            color: "#f6ba35",
          }}
        >
          Khóa học phổ biến
        </p>
      </a>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center">
        {topKhoaHocPhoBien.map((item) => {
          const popoVerKhoaHocPhoBien = (
            <div>
              <Card style={{ width: 300 }}>
                <div className="flex items-center">
                  <img src={avtPPV} width={"40px"} alt="" />
                  <span className="ml-2 font-bold" style={{ color: "#8C8C8C" }}>
                    Elun Musk Ricard
                  </span>
                </div>
                <div className="my-3">
                  <p className="font-bold">
                    BOOTCAMP - LẬP TRÌNH FULL STACK TỪ ZERO ĐẾN CÓ VIỆC
                  </p>
                </div>
                <div className="mb-3" style={{ color: "#8C8C8C" }}>
                  <p>
                    Đã có hơn 6200 bạn đăng kí học và có việc làm thông qua
                    chương trình đào tạo Bootcamp Lập trình Front End chuyên
                    nghiệp. Khóa học 100% thực hành cường độ cao theo dự án thực
                    tế và kết nối doanh nghiệp hỗ trợ tìm việc ngay sau khi
                    học...
                  </p>
                </div>
                <div
                  className="flex justify-between items-center mb-3 space-x-2"
                  style={{ fontSize: "16px", color: "#8c8c8c" }}
                >
                  <span>
                    <i
                      className="far fa-clock mr-1"
                      style={{ color: "#f5c002" }}
                    ></i>{" "}
                    8 giờ
                  </span>
                  <span>
                    <i
                      className="far fa-calendar-alt mr-1"
                      style={{ color: "#f06f68" }}
                    ></i>{" "}
                    4 Tuần
                  </span>
                  <span>
                    <i
                      className="fas fa-signal mr-1"
                      style={{ color: "#65c9ff" }}
                    ></i>{" "}
                    Tất Cả
                  </span>
                </div>
                <div className="mt-3">
                  <NavLink
                    className="no-underline block w-full h-full bg-[#41b294] text-white text-center py-3"
                    to={`/chitiet/${item.maKhoaHoc}`}
                  >
                    Xem Chi Tiết
                  </NavLink>
                </div>
              </Card>
            </div>
          );

          return (
            <div className="flex justify-center" key={item.maKhoaHoc}>
              <Popover content={popoVerKhoaHocPhoBien}>
                <Card
                  className="relative"
                  onClick={() => {
                    navigate(`/chitiet/${item.maKhoaHoc}`);
                  }}
                  hoverable
                  style={{ width: 300, height: 400, padding: "10px" }}
                  cover={
                    <div className="h-[175px] overflow-hidden">
                      <img
                        alt="example"
                        src={item.hinhAnh}
                        className="w-full h-full object-fill"
                      />
                    </div>
                  }
                >
                  <p
                    className="inline-block text-center font-semibold px-2 absolute top-40 left-0"
                    style={{
                      backgroundColor: "#41b294",
                      color: "#fff",
                      fontSize: "16px",
                    }}
                  >
                    {item.tenKhoaHoc}
                  </p>
                  <p className="font-bold mb-2" style={{ fontSize: "16px" }}>
                    Lập Trình hiện đang là xu hướng trên toàn thế giới...
                  </p>
                  <div className="flex items-center mb-4 space-x-2">
                    <img
                      src={avtELM}
                      style={{ width: "35px" }}
                      alt=""
                      className="border-t-2 border-b-2 border-[#f6ba35] p-1 rounded-full"
                    />
                    <span className="font-bold" style={{ color: "#8C8C8C" }}>
                      Elon Musk
                    </span>
                  </div>
                  <div className="mt-1 -mx-4 border-t-2 border-gray-300 pt-2">
                    <Row className="pb-0">
                      <Col
                        span={8}
                        className="flex justify-center items-center"
                      >
                        <div className="text-start">
                          <p
                            className="line-through mb-0 text-gray-500 text-sm"
                            style={{ fontSize: "12px", marginBottom: "0" }}
                          >
                            800.000 <sup>đ</sup>
                          </p>
                          <p
                            className="font-bold text-[#41b294]"
                            style={{ fontSize: "16px", marginBottom: "0" }}
                          >
                            400.000 <sup>đ</sup>
                          </p>
                        </div>
                      </Col>
                      <Col
                        span={8}
                        offset={8}
                        className="flex justify-center items-center"
                      >
                        <div className="flex justify-center items-center text-center">
                          <i
                            className="fas fa-star mr-1"
                            style={{ color: "#f6ba35" }}
                          ></i>
                          <span
                            className="font-bold"
                            style={{ color: "#f6ba35", fontSize: "16px" }}
                          >
                            4.9
                          </span>
                          <span style={{ color: "#8C8C8C", fontSize: "12px" }}>
                            (7840)
                          </span>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Card>
              </Popover>
            </div>
          );
        })}
      </div>

      {/* khoaHocThamKhao */}
      <a href="#" className="no-underline inline-block ml-5 mt-3">
        <p
          className="font-bold"
          style={{
            color: "#000000",
          }}
        >
          Khóa học tham khảo
        </p>
      </a>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center">
        {khoaHocThamKhao.map((item) => {
          const popoVerKhoaHocThamKhao = (
            <div>
              <Card style={{ width: 300 }}>
                <div className="flex items-center">
                  <img src={avtPPV} width={"40px"} alt="" />
                  <span className="ml-2 font-bold" style={{ color: "#8C8C8C" }}>
                    Elun Musk Ricard
                  </span>
                </div>
                <div className="my-3">
                  <p className="font-bold">
                    BOOTCAMP - LẬP TRÌNH FULL STACK TỪ ZERO ĐẾN CÓ VIỆC
                  </p>
                </div>
                <div className="mb-3" style={{ color: "#8C8C8C" }}>
                  <p>
                    Đã có hơn 6200 bạn đăng kí học và có việc làm thông qua
                    chương trình đào tạo Bootcamp Lập trình Front End chuyên
                    nghiệp. Khóa học 100% thực hành cường độ cao theo dự án thực
                    tế và kết nối doanh nghiệp hỗ trợ tìm việc ngay sau khi
                    học...
                  </p>
                </div>
                <div
                  className="flex justify-between items-center mb-3 space-x-2"
                  style={{ fontSize: "16px", color: "#8c8c8c" }}
                >
                  <span>
                    <i
                      className="far fa-clock mr-1"
                      style={{ color: "#f5c002" }}
                    ></i>
                    8 giờ
                  </span>
                  <span>
                    <i
                      className="far fa-calendar-alt mr-1"
                      style={{ color: "#f06f68" }}
                    ></i>
                    4 Tuần
                  </span>
                  <span>
                    <i
                      className="fas fa-signal mr-1"
                      style={{ color: "#65c9ff" }}
                    ></i>
                    Tất Cả
                  </span>
                </div>
                <div className="mt-3">
                  <NavLink
                    className="no-underline block w-full h-full bg-[#41b294] text-white text-center py-3"
                    to={`/chitiet/${item.maKhoaHoc}`}
                  >
                    Xem Chi Tiết
                  </NavLink>
                </div>
              </Card>
            </div>
          );
          return (
            <div className="flex justify-center" key={item.maKhoaHoc}>
              <Popover content={popoVerKhoaHocThamKhao}>
                <Card
                  className="relative"
                  onClick={() => {
                    navigate(`/chitiet/${item.maKhoaHoc}`);
                  }}
                  hoverable
                  style={{
                    width: 300,
                    height: 400,
                    padding: "10px",
                  }}
                  cover={
                    <div className="h-[175px] overflow-hidden">
                      <img
                        alt="example"
                        src={item.hinhAnh}
                        className="w-full h-full object-fill"
                      />
                    </div>
                  }
                >
                  <p
                    className="inline-block text-center font-semibold px-2 absolute top-40 left-0"
                    style={{
                      backgroundColor: "#41b294",
                      color: "#fff",
                      fontSize: "16px",
                    }}
                  >
                    {item.tenKhoaHoc}
                  </p>
                  <p className="font-bold mb-2" style={{ fontSize: "16px" }}>
                    Lập Trình hiện đang là xu hướng trên toàn thế giới...
                  </p>
                  <div
                    className="flex justify-between items-center mb-4 space-x-2"
                    style={{
                      fontSize: "16px",
                      color: "#8c8c8c",
                    }}
                  >
                    <span>
                      <i
                        className="far fa-clock mr-1"
                        style={{
                          color: "#f5c002",
                        }}
                      ></i>
                      8 giờ
                    </span>
                    <span>
                      <i
                        className="far fa-calendar-alt mr-1"
                        style={{ color: "#f06f68" }}
                      ></i>
                      4 Tuần
                    </span>
                    <span>
                      <i
                        className="fas fa-signal mr-1"
                        style={{ color: "#65c9ff" }}
                      ></i>
                      Tất Cả
                    </span>
                  </div>
                  <div className="mt-1 -mx-4 border-t-2 border-gray-300 pt-2">
                    <Row className="pb-0 justify-between items-center">
                      <Col span={8} className="flex justify-start items-center">
                        <div className="flex items-center space-x-2">
                          <img
                            src={avtELM}
                            style={{ width: "35px" }}
                            alt=""
                            className="border-t-2 border-b-2 border-[#f6ba35] p-1 rounded-full"
                          />
                          <span
                            className="font-bold"
                            style={{
                              color: "#8C8C8C",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Elon Musk
                          </span>
                        </div>
                      </Col>
                      <Col span={8} className="flex justify-end items-center">
                        <div className="text-center">
                          <p
                            className="line-through mb-0 text-gray-500 text-sm"
                            style={{ fontSize: "12px", marginBottom: "0" }}
                          >
                            800.000 <sup>đ</sup>
                          </p>
                          <p
                            className="font-bold text-[#41b294]"
                            style={{
                              fontSize: "16px",
                              marginBottom: "0",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            400.000 <sup>đ</sup>
                            <i
                              className="fas fa-tag"
                              style={{ color: "red", marginLeft: "5px" }}
                            ></i>
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Card>
              </Popover>
            </div>
          );
        })}
      </div>

      {/* cacKhoaHoc */}
      <a href="#" className="no-underline inline-block ml-5 mt-3">
        <p
          className="font-bold"
          style={{
            color: "#000000",
          }}
        >
          Khóa học khác
        </p>
      </a>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center">
        {cacKhoaHoc.map((item) => {
          const popoVerCacKhoaHoc = (
            <div>
              <Card style={{ width: 300 }}>
                <div className="flex items-center">
                  <img src={avtPPV} width={"40px"} alt="" />
                  <span className="ml-2 font-bold" style={{ color: "#8C8C8C" }}>
                    Elun Musk Ricard
                  </span>
                </div>
                <div className="my-3">
                  <p className="font-bold">
                    BOOTCAMP - LẬP TRÌNH FULL STACK TỪ ZERO ĐẾN CÓ VIỆC
                  </p>
                </div>
                <div className="mb-3" style={{ color: "#8C8C8C" }}>
                  <p>
                    Đã có hơn 6200 bạn đăng kí học và có việc làm thông qua
                    chương trình đào tạo Bootcamp Lập trình Front End chuyên
                    nghiệp. Khóa học 100% thực hành cường độ cao theo dự án thực
                    tế và kết nối doanh nghiệp hỗ trợ tìm việc ngay sau khi
                    học...
                  </p>
                </div>
                <div
                  className="flex justify-between items-center mb-3 space-x-2"
                  style={{ fontSize: "16px", color: "#8c8c8c" }}
                >
                  <span>
                    <i
                      className="far fa-clock mr-1"
                      style={{ color: "#f5c002" }}
                    ></i>{" "}
                    8 giờ
                  </span>
                  <span>
                    <i
                      className="far fa-calendar-alt mr-1"
                      style={{ color: "#f06f68" }}
                    ></i>{" "}
                    4 Tuần
                  </span>
                  <span>
                    <i
                      className="fas fa-signal mr-1"
                      style={{ color: "#65c9ff" }}
                    ></i>{" "}
                    Tất Cả
                  </span>
                </div>
                <div className="mt-3">
                  <NavLink
                    className="no-underline block w-full h-full bg-[#41b294] text-white text-center py-3"
                    to={`/chitiet/${item.maKhoaHoc}`}
                  >
                    Xem Chi Tiết
                  </NavLink>
                </div>
              </Card>
            </div>
          );
          return (
            <div className="flex justify-center" key={item.maKhoaHoc}>
              <Popover content={popoVerCacKhoaHoc}>
                <Card
                  className="relative"
                  onClick={() => {
                    navigate(`/chitiet/${item.maKhoaHoc}`);
                  }}
                  hoverable
                  style={{
                    width: 300,
                    height: 400,
                    padding: "10px",
                  }}
                  cover={
                    <div className="h-[175px] overflow-hidden">
                      <img
                        alt="example"
                        src={item.hinhAnh}
                        className="w-full h-full object-fill"
                      />
                    </div>
                  }
                >
                  <p
                    className="inline-block text-center font-semibold px-2 absolute top-40 left-0"
                    style={{
                      backgroundColor: "#41b294",
                      color: "#fff",
                      fontSize: "16px",
                    }}
                  >
                    {item.tenKhoaHoc}
                  </p>
                  <p className="font-bold mb-2" style={{ fontSize: "16px" }}>
                    Lập Trình hiện đang là xu hướng trên toàn thế giới...
                  </p>
                  <div
                    className="flex justify-between items-center mb-4 space-x-2"
                    style={{
                      fontSize: "16px",
                      color: "#8c8c8c",
                    }}
                  >
                    <span>
                      <i
                        className="far fa-clock mr-1"
                        style={{
                          color: "#f5c002",
                        }}
                      ></i>
                      8 giờ
                    </span>
                    <span>
                      <i
                        className="far fa-calendar-alt mr-1"
                        style={{ color: "#f06f68" }}
                      ></i>
                      4 Tuần
                    </span>
                    <span>
                      <i
                        className="fas fa-signal mr-1"
                        style={{ color: "#65c9ff" }}
                      ></i>
                      Tất Cả
                    </span>
                  </div>
                  <div className="mt-1 -mx-4 border-t-2 border-gray-300 pt-2">
                    <Row className="pb-0 justify-between items-center">
                      <Col span={8} className="flex justify-start items-center">
                        <div className="flex items-center space-x-2">
                          <img
                            src={avtELM}
                            style={{ width: "35px" }}
                            alt=""
                            className="border-t-2 border-b-2 border-[#f6ba35] p-1 rounded-full"
                          />
                          <span
                            className="font-bold"
                            style={{
                              color: "#8C8C8C",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Elon Musk
                          </span>
                        </div>
                      </Col>
                      <Col span={8} className="flex justify-end items-center">
                        <div className="text-center">
                          <p
                            className="line-through mb-0 text-gray-500 text-sm"
                            style={{ fontSize: "12px", marginBottom: "0" }}
                          >
                            800.000 <sup>đ</sup>
                          </p>
                          <p
                            className="font-bold text-[#41b294]"
                            style={{
                              fontSize: "16px",
                              marginBottom: "0",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            400.000 <sup>đ</sup>
                            <i
                              className="fas fa-tag"
                              style={{ color: "red", marginLeft: "5px" }}
                            ></i>
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Card>
              </Popover>
            </div>
          );
        })}
      </div>
    </div>
  );
}
