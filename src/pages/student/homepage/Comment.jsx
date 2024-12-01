import { Col, Row } from "antd";
import React from "react";
import cauPhuc from "./asset/listDangVienHangDau/cauPhuc.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

export default function Comment() {
  return (
    <div
      className="py-5 px-3"
      style={{
        background:
          "linear-gradient(to right, rgb(65, 178, 148), rgb(246, 186, 53))",
        backgroundSize: "200% 100%",
        backgroundPosition: "right center",
        transition: "background-position 0.7s ease-in-out",
      }}
      onMouseEnter={(e) => (e.target.style.backgroundPosition = "left center")}
      onMouseLeave={(e) => (e.target.style.backgroundPosition = "right center")}
    >
      <Row>
        <Col span={12}>
          <div className="flex justify-center items-center ">
            <img
              className="rounded-tl-[10%] rounded-tr-[50%] rounded-bl-[50%] rounded-br-[50%]"
              src={cauPhuc}
              style={{
                width: "230px",
                height: "230px",
                objectFit: "fill",
              }}
              alt=""
            />
          </div>
        </Col>
        <Col span={12}>
          <div>
            <p style={{ fontSize: "17px" }}>
              <FontAwesomeIcon
                icon={faQuoteLeft}
                style={{ color: "#ed85ab", fontSize: "30px" }}
              />
              <span className="mx-4">
                Chương trình giảng dạy được biên soạn dành riêng cho các bạn Lập
                trình từ trái ngành hoặc đã có kiến thức theo cường độ cao, luôn
                được tinh chỉnh và tối ưu hóa theo thời gian bởi các thành viên
                sáng lập và giảng viên dày kinh nghiệm.Thực sự rất hay và hấp
                dẫn
              </span>
              <FontAwesomeIcon
                icon={faQuoteLeft}
                style={{
                  transform: "rotate(180deg)",
                  color: "#ed85ab",
                  fontSize: "30px",
                }}
              />
            </p>

            <p
              className="font-bold mb-1"
              style={{ color: "#ed85ab", fontSize: "20px" }}
            >
              Cậu Phúc Dev
            </p>
            <p style={{ color: "#8c8c8c" }}>Học viên xuất sắc</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
