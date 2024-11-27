import { Col, Row } from "antd";
import Lottie from "lottie-react";
import React from "react";
import bannerAnimate from "./asset/BannerAnimate2.json";
import bannerPlane from "./asset/AnimationBanner.json";

export default function Banner() {
  return (
    <div className="px-3">
      <Row>
        <Col span={12}>
          <div className="bannerLeft flex justify-center items-center h-full relative overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Lottie
                animationData={bannerPlane}
                loop={true}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className="sloganBanner text-start">
              <h1 style={{ fontWeight: "bold", fontSize: "50px" }}>
                Chào mừng
              </h1>
              <h1 style={{ fontWeight: "bold", fontSize: "50px" }}>
                đến với môi trường
              </h1>
              <h1
                className="relative overflow-hidden inline-block"
                style={{
                  fontWeight: "bold",
                  fontSize: "65px",
                  color: "#41b294",
                }}
              >
                <span className="block whitespace-nowrap overflow-hidden animate-slide-in-out">
                  V
                  <span className="inline-block" style={{ fontSize: "50px" }}>
                    learning
                  </span>
                </span>
              </h1>
              <div>
                <button className="btn btn-warning text-white hover:scale-90 duration-500 transition-all relative z-10">
                  BẮT ĐẦU NÀO
                </button>
              </div>
            </div>
          </div>
        </Col>
        <Col span={12}>
          <div className="bannerRight">
            <Lottie
              animationData={bannerAnimate}
              style={{ width: "100%" }}
              loop={true}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}
