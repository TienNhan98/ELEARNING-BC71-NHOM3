import { Col, Row } from "antd";
import React from "react";
import phiHanhGia from "./asset/HinhAnhChenBackground/giaHanhPhi.png";

export default function InfoCoure() {
  return (
    <div className="infoCoure px-4">
      <Row className="justify-around" gutter={[16, 16]}>
        {/*   className="flex" */}
        {/* Hiệu ứng vệt sáng */}
        <Col span={8} className="flex relative group overflow-hidden">
          <div
            // flex flex-col h-full
            className="infoItem infoItem1 p-4 text-start text-white flex flex-col h-full space-y-4 relative"
            style={{
              backgroundColor: "#41b294",
              backgroundImage: `url(${phiHanhGia})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "50%",
              backgroundPosition: "bottom right",
            }}
          >
            {/* Vệt sáng */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
            <h3 style={{ fontSize: "28px" }}>KHÓA HỌC</h3>
            <p className="space-y-2" style={{ fontSize: "16px" }}>
              <span className="span" style={{ fontWeight: "bold" }}>
                Học qua dự án thực tế
              </span>
              , học đi đôi với hành, không lý thuyết lan man, phân tích cội
              nguồn của vấn đề, xây dựng từ các ví dụ nhỏ đến thực thi một dự án
              lớn ngoài thực tế để học viên học xong làm được ngay
            </p>
            <ul className="pl-0 space-y-2 ">
              <li>
                <i className="fas fa-check pr-2"></i>
                <span style={{ fontSize: "16px" }}>
                  Hơn 1000 bài tập và dự án thực tế
                </span>
              </li>
              <li>
                <i className="fas fa-check pr-2"></i>
                <span style={{ fontSize: "16px" }}>
                  Công nghệ cập nhật mới nhất
                </span>
              </li>
              <li>
                <i className="fas fa-check pr-2"></i>
                <span style={{ fontSize: "16px" }}>
                  Hình ảnh, ví dụ, bài giảng sinh động trực quan
                </span>
              </li>
              <li>
                <i className="fas fa-check pr-2"></i>
                <span style={{ fontSize: "16px" }}>
                  Tư duy phân tích, giải quyết vấn đề trong dự án
                </span>
              </li>
              <li>
                <i className="fas fa-check pr-2"></i>
                <span style={{ fontSize: "16px" }}>
                  Học tập kinh nghiệm, qui trình làm dự án, các qui chuẩn trong
                  dự án
                </span>
              </li>
              <li>
                <i className="fas fa-check pr-2"></i>
                <span style={{ fontSize: "16px" }}>
                  Cơ hội thực tập tại các công ty lớn như FPT, Microsoft
                </span>
              </li>
            </ul>
          </div>
        </Col>
        {/* class flex */}
        <Col span={8} className="flex">
          {/* //flex flex-col h-full */}
          <div className="infoItem infoItem2 flex flex-col h-full">
            {/* h-full */}
            <Row className="flex flex-col gap-y-4 h-full">
              {/* className="flex-1" */}
              <Col span={24} className="flex-1 relative group overflow-hidden">
                {/*  h-full */}
                <div
                  className="infoItem infoItem2 p-4 text-start text-white h-full relative"
                  style={{
                    backgroundColor: "#f6ba35",
                  }}
                >
                  {/* Vệt sáng */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                  <h3 style={{ fontSize: "28px" }}>LỘ TRÌNH PHÙ HỢP</h3>
                  <ul className="pl-0 space-y-2">
                    <li>
                      <i className="fas fa-check pr-2"></i>
                      <span style={{ fontSize: "16px" }}>
                        Lộ trình bài bản từ zero tới chuyên nghiệp, nâng cao
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-check pr-2"></i>
                      <span style={{ fontSize: "16px" }}>
                        Học, luyện tập code, kỹ thuật phân tích, soft skill
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-check pr-2"></i>
                      <span style={{ fontSize: "16px" }}>
                        Huấn luyện để phát triển năng lực và niềm đam mê lập
                        trình
                      </span>
                    </li>
                  </ul>
                </div>
              </Col>
              {/* className="flex-1" */}
              <Col span={24} className="flex-1 relative group overflow-hidden">
                {/* h-full */}
                <div
                  className="infoItem infoItem2 p-4 text-start text-white h-full relative"
                  style={{
                    backgroundColor: "#f6ba35",
                  }}
                >
                  {/* Vệt sáng */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                  <h3 style={{ fontSize: "28px" }}>GIẢNG VIÊN</h3>
                  <ul className="pl-0 space-y-2">
                    <li>
                      <i className="fas fa-check pr-2"></i>
                      <span style={{ fontSize: "16px" }}>
                        Tương tác cùng mentor và giảng viên qua phần thảo luận
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-check pr-2"></i>
                      <span style={{ fontSize: "16px" }}>
                        Review code và đưa ra các nhận xét góp ý
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-check pr-2"></i>
                      <span style={{ fontSize: "16px" }}>
                        Chấm điểm tương tác thảo luận giữa các học viên
                      </span>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        {/*  className="flex" */}
        <Col span={8} className="flex">
          {/* flex flex-col h-full */}
          <div className="infoItem infoItem3 flex flex-col h-full">
            {/* h-full */}
            <Row className="flex flex-col gap-y-4 h-full">
              {/* className="flex-1" */}
              <Col span={24} className="flex-1 relative group overflow-hidden">
                {/* h-full */}
                <div
                  className="infoItem infoItem2 p-4 text-start text-white h-full relative"
                  style={{
                    backgroundColor: "#5c8295",
                  }}
                >
                  {/* Vệt sáng */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                  <h3 style={{ fontSize: "28px" }}>HỆ THỐNG HỌC TẬP</h3>
                  <ul className="pl-0 space-y-2">
                    <li>
                      <i className="fas fa-check pr-2"></i>
                      <span style={{ fontSize: "16px" }}>
                        Tự động chấm điểm trắc nghiệm và đưa câu hỏi tùy theo
                        mức độ học viên
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-check pr-2"></i>
                      <span style={{ fontSize: "16px" }}>
                        Thống kê lượt xem video, làm bài, điểm số theo chu kỳ
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-check pr-2"></i>
                      <span style={{ fontSize: "16px" }}>
                        Thống kê, so sánh khả năng học của các học viên cùng
                        level để đưa ra mục tiêu học tập
                      </span>
                    </li>
                  </ul>
                </div>
              </Col>
              {/* className="flex-1" */}
              <Col span={24} className="flex-1 relative group overflow-hidden">
                {/* h-full */}
                <div
                  className="infoItem infoItem2 p-4 text-start text-white h-full relative"
                  style={{
                    backgroundColor: "#63c0a8",
                  }}
                >
                  {/* Vệt sáng */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                  <h3 style={{ fontSize: "28px" }}>CHỨNG NHẬN</h3>
                  <ul className="pl-0 space-y-2">
                    <li>
                      <i className="fas fa-check pr-2"></i>
                      <span style={{ fontSize: "16px" }}>
                        Chấm bài và có thể vấn đáp trực tuyến để review
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-check pr-2"></i>
                      <span style={{ fontSize: "16px" }}>
                        Hệ thống của chúng tôi cũng tạo ra cho bạn một CV trực
                        tuyến độc đáo
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-check pr-2"></i>
                      <span style={{ fontSize: "16px" }}>
                        Kết nối CV của bạn đến với các đối tác của V learning
                      </span>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}
