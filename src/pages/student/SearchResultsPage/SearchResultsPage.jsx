import React from "react";
import { useParams, useLocation } from "react-router-dom";
import styles from "../courses/course-detail/DetailPage.module.scss";
import { Button, Checkbox, Col, Divider, Row } from "antd";
import { StarFilled } from "@ant-design/icons";

const SearchResultsPage = () => {
  // const { searchValue } = useParams(); // Lấy giá trị từ URL
  const location = useLocation();
  const { results } = location.state || { results: [] }; // Tránh lỗi nếu state rỗng

  return (
    <section>
      <div className={styles.titleDetailCourse}>
        <h3>Tìm kiếm</h3>
        <p>Kết quả tìm kiếm khóa học!</p>
      </div>
      <div className="px-4 mt-3">
        <Row gutter={[16, 16]}>
          <Col span={5}>
            <div
              style={{
                padding: "20px",
                border: "1px solid #d9d9d9",
                borderRadius: "8px",
              }}
            >
              <h3>Lọc</h3>

              <div>
                <h4>Khóa học</h4>
                <Checkbox.Group className="flex flex-col">
                  <Checkbox value="course1">Tất Cả</Checkbox>
                  <Checkbox value="course2">Front End</Checkbox>
                  <Checkbox value="course3">Back End</Checkbox>
                  <Checkbox value="course4">HTML / CSS</Checkbox>
                </Checkbox.Group>
              </div>

              <Divider />

              <div>
                <h4>Cấp độ</h4>
                <Checkbox.Group className="flex flex-col">
                  <Checkbox value="level1">Tất Cả</Checkbox>
                  <Checkbox value="level2">Mới Bắt Đầu</Checkbox>
                  <Checkbox value="level3">Trung Cấp</Checkbox>
                  <Checkbox value="level4">Cao Cấp</Checkbox>
                </Checkbox.Group>
              </div>

              <Divider />

              <div>
                <h4>Đánh giá</h4>
                <Checkbox.Group className="flex flex-col">
                  <Checkbox value="rating1">
                    <StarFilled style={{ color: "gold" }} />
                  </Checkbox>
                  <Checkbox value="rating2">
                    <StarFilled style={{ color: "gold" }} />
                    <StarFilled style={{ color: "gold" }} />
                  </Checkbox>
                  <Checkbox value="rating3">
                    <StarFilled style={{ color: "gold" }} />
                    <StarFilled style={{ color: "gold" }} />
                    <StarFilled style={{ color: "gold" }} />
                  </Checkbox>
                  <Checkbox value="rating4">
                    <StarFilled style={{ color: "gold" }} />
                    <StarFilled style={{ color: "gold" }} />
                    <StarFilled style={{ color: "gold" }} />
                    <StarFilled style={{ color: "gold" }} />
                  </Checkbox>
                  <Checkbox value="rating5">
                    <StarFilled style={{ color: "gold" }} />
                    <StarFilled style={{ color: "gold" }} />
                    <StarFilled style={{ color: "gold" }} />
                    <StarFilled style={{ color: "gold" }} />
                    <StarFilled style={{ color: "gold" }} />
                  </Checkbox>
                </Checkbox.Group>
              </div>
            </div>
          </Col>

          <Col span={19}>
            <div
              style={{
                padding: "20px",
                border: "1px solid #d9d9d9",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  padding: "20px",
                  border: "1px solid #d9d9d9",
                  borderRadius: "8px",
                }}
              >
                {/* Hiển thị số lượng kết quả tìm được */}
                <p>Hiển thị {results.length} kết quả</p>

                {results.length > 0 ? (
                  results.map((course) => (
                    <div key={course.maKhoaHoc} className="course-item">
                      <Row gutter={[16, 16]}>
                        <Col span={6}>
                          <img
                            src={course.hinhAnh}
                            alt={course.tenKhoaHoc}
                            style={{
                              width: "100%",
                              height: "auto",
                              objectFit: "cover",
                            }}
                          />
                        </Col>
                        <Col span={18}>
                          <h3>{course.tenKhoaHoc}</h3>
                          <p>{course.moTa}</p>
                          <Button type="primary">Xem chi tiết</Button>
                        </Col>
                      </Row>
                      <Divider />
                    </div>
                  ))
                ) : (
                  <p>Không có khóa học nào phù hợp với tìm kiếm của bạn.</p>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default SearchResultsPage;
