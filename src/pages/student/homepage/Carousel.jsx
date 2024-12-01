import { Col, Row } from "antd";
import React from "react";
import couple from "./asset/HinhAnhCrouselCouterup/couple.png";
import thayGiao from "./asset/HinhAnhCrouselCouterup/thayGiao.png";
import dongHo from "./asset/HinhAnhCrouselCouterup/dongHoCat.png";
import lich from "./asset/HinhAnhCrouselCouterup/lich.png";
import CountUp from "react-countup";

export default function Carousel() {
  return (
    <div className="mt-5 p-5" style={{ backgroundColor: "#f0f8ff" }}>
      <Row>
        <Col span={6}>
          <div className="flex flex-col justify-center items-center p-4">
            <div className="carouselTop">
              <img
                src={couple}
                style={{ width: "80px", height: "80px" }}
                alt=""
              />
            </div>
            <div
              className="carouselMid font-extrabold font-mono"
              style={{ fontSize: "50px", color: "#41b294" }}
            >
              <CountUp end={9000} separator="" duration={5} />
            </div>
            <div className="carouselBot font-bold" style={{ fontSize: "16px" }}>
              Học Viên
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div className="flex flex-col justify-center items-center p-4">
            <div className="carouselTop">
              <img
                src={lich}
                style={{ width: "80px", height: "80px" }}
                alt=""
              />
            </div>
            <div
              className="carouselMid font-extrabold font-mono"
              style={{ fontSize: "50px", color: "#41b294" }}
            >
              <CountUp end={1000} separator="" duration={5} />
            </div>
            <div className="carouselBot font-bold" style={{ fontSize: "16px" }}>
              Khóa Học
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div className="flex flex-col justify-center items-center p-4">
            <div className="carouselTop">
              <img
                src={dongHo}
                style={{ width: "80px", height: "80px" }}
                alt=""
              />
            </div>
            <div
              className="carouselMid font-extrabold font-mono"
              style={{ fontSize: "50px", color: "#41b294" }}
            >
              <CountUp end={33200} separator="" duration={5} />
            </div>
            <div className="carouselBot font-bold" style={{ fontSize: "16px" }}>
              Giờ Học
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div className="flex flex-col justify-center items-center p-4">
            <div className="carouselTop">
              <img
                src={thayGiao}
                style={{ width: "80px", height: "80px" }}
                alt=""
              />
            </div>
            <div
              className="carouselMid font-extrabold font-mono"
              style={{ fontSize: "50px", color: "#41b294" }}
            >
              <CountUp end={400} separator="" duration={5} />
            </div>
            <div className="carouselBot font-bold" style={{ fontSize: "16px" }}>
              Giảng Viên
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
