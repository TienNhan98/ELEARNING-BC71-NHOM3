import React from "react";
import styles from "./DetailPage.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { callApiKhoaHoc } from "../../../../service/callApiKhoaHoc";

import Swal from "sweetalert2";

export default function CourseDetail() {
  const navigate = useNavigate();
  const { maKhoaHoc } = useParams();

  const [courseDetail, setCourseDetail] = useState([]);

  // hàm btn đăng ký khóa học
  const btnRegisterCourse = () => {
    const userLogin = JSON.parse(localStorage.getItem("USER_LOGIN"));
    if (userLogin) {
      const infoRegisrer = {
        taiKhoan: userLogin.taiKhoan,
        maKhoaHoc: maKhoaHoc,
      };

      console.log("🚀 ~ btnRegisterCourse ~ taiKhoan:", infoRegisrer);

      registerCourse(infoRegisrer); // Gọi API đăng ký khóa học
    } else {
      navigate("/login");
    }
  };

  // hàm gọi API để đăng ký khóa học
  const registerCourse = async (infoRegisrer) => {
    try {
      // Gửi yêu cầu đăng ký khóa học
      const response = await callApiKhoaHoc.registerCourseAPI(infoRegisrer);
      Swal.fire({
        title: "Đăng kí thành công",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });
    } catch (errors) {
      // Xử lý lỗi khi gọi API
      console.error("Đăng ký khóa học thất bại:", errors);
      Swal.fire({
        title: errors.response?.data,
        icon: "warning",
        text: "Đã xảy ra lỗi vui lòng quay lại trang chủ hoặc thử lại",
        timer: 2000,
        showConfirmButton: false,
      });
    }
  };

  // console.log("🚀 ~ ListCoursesByCat ~ listKhoaHoc:", listKhoaHoc);
  useEffect(() => {
    callApiKhoaHoc
      .layChiTietKhoaHoc(maKhoaHoc)
      .then((result) => {
        console.log("🚀 ~ .then ~ result:", result.data);
        setCourseDetail(result.data);
      })
      .catch((err) => {});
  }, []);

  return (
    <section className=" mx-auto ">
      {/* Row 1: Thông tin khóa học */}
      <div className={styles.titleDetailCourse}>
        <h3>Thông tin khóa học</h3>
        <p>Tiến lên và không chần chừ !!!</p>
      </div>

      <div className="p-12">
        {/* Row 2: Chia thành 2 cột */}
        <div className="grid grid-cols-12 gap-2">
          {/* Cột trái: Chi tiết khóa học */}
          <div className="col-span-12 sm:col-span-8 bg-white p-6 rounded-lg shadow-lg">
            <div className="col-span-2 text-left">
              <h4 className="font-500">{courseDetail?.tenKhoaHoc}</h4>
              <div className="grid grid-cols-3 py-30 my-4">
                {/* 1 */}
                <div>
                  <div className={styles.detailCourseInfo}>
                    <div>
                      <img
                        src="https://demo2.cybersoft.edu.vn/static/media/instrutor5.2e4bd1e6.jpg"
                        alt=""
                      />
                    </div>
                    <div className="px-2 ">
                      <p>Giảng viên</p>
                      <p className="font-600">Zion Huỳnh Chiểu & Tiến Nhân</p>
                    </div>
                  </div>
                </div>
                {/* 2 */}
                <div>
                  <div className={styles.detailCourseInfo}>
                    <div>
                      <i className="fas fa-graduation-cap"></i>
                    </div>
                    <div className="px-2">
                      <p>Lĩnh vực</p>
                      <p className="font-600">Lập Trình Backend</p>
                    </div>
                  </div>
                </div>
                {/* 3 */}
                <div>
                  <div className={styles.detailCourseInfo}>
                    <div className={styles.reviewDetail}>
                      <span className="font-600">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        4.9
                      </span>
                      <p>1000 đánh giá</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className={styles.textDiscripts}>
                React.js là thư viện JavaScript phổ biến nhất mà bạn có thể sử
                dụng và tìm hiểu ngày nay để xây dựng giao diện người dùng hiện
                đại, phản ứng cho web.Khóa học này dạy bạn về React chuyên sâu,
                từ cơ bản, từng bước đi sâu vào tất cả các kiến ​​thức cơ bản
                cốt lõi, khám phá rất nhiều ví dụ và cũng giới thiệu cho bạn các
                khái niệm nâng cao.Bạn sẽ nhận được tất cả lý thuyết, hàng tấn
                ví dụ và bản trình diễn, bài tập và bài tập cũng như vô số kiến
                ​​thức quan trọng bị hầu hết các nguồn khác bỏ qua - sau cùng,
                có một lý do tại sao khóa học này lại rất lớn! Và trong trường
                hợp bạn thậm chí không biết tại sao bạn lại muốn học React và
                bạn chỉ ở đây vì một số quảng cáo hoặc "thuật toán" - đừng lo
                lắng: ReactJS là một công nghệ quan trọng với tư cách là một nhà
                phát triển web và trong khóa học này, tôi sẽ cũng giải thích TẠI
                SAO điều đó lại quan trọng!
              </p>
              <div className={styles.boxCourseLearn}>
                <h6>Những gì bạn sẽ học</h6>
                <div className="grid grid-cols-2 gap-10">
                  <div>
                    <ul>
                      <li>
                        <i className="fas fa-check"></i>
                        <a href="/">
                          Xây dựng các ứng dụng web mạnh mẽ, nhanh chóng, thân
                          thiện với người dùng và phản ứng nhanh
                        </a>
                      </li>
                      <li>
                        <i className="fas fa-check"></i>
                        <a href="/">
                          Đăng ký công việc được trả lương cao hoặc làm
                          freelancer trong một trong những lĩnh vực được yêu cầu
                          nhiều nhất mà bạn có thể tìm thấy trong web dev ngay
                          bây giờ
                        </a>
                      </li>
                      <li>
                        <i className="fas fa-check"></i>
                        <a href="/">
                          Cung cấp trải nghiệm người dùng tuyệt vời bằng cách
                          tận dụng sức mạnh của JavaScript một cách dễ dàng
                        </a>
                      </li>
                      <li>
                        <i className="fas fa-check"></i>
                        <a href="/">
                          Tìm hiểu tất cả về React Hooks và React Components
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <ul>
                      <li>
                        <i className="fas fa-check"></i>
                        <a href="/">
                          Xây dựng các ứng dụng web mạnh mẽ, nhanh chóng, thân
                          thiện với người dùng và phản ứng nhanh
                        </a>
                      </li>
                      <li>
                        <i className="fas fa-check"></i>
                        <a href="/">
                          Đăng ký công việc được trả lương cao hoặc làm
                          freelancer trong một trong những lĩnh vực được yêu cầu
                          nhiều nhất mà bạn có thể tìm thấy trong web dev ngay
                          bây giờ
                        </a>
                      </li>
                      <li>
                        <i className="fas fa-check"></i>
                        <a href="/">
                          Cung cấp trải nghiệm người dùng tuyệt vời bằng cách
                          tận dụng sức mạnh của JavaScript một cách dễ dàng
                        </a>
                      </li>
                      <li>
                        <i className="fas fa-check"></i>
                        <a href="/">
                          Tìm hiểu tất cả về React Hooks và React Components
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={styles.courseContent}>
                <h6>nội dung khóa học</h6>
                <div className={styles.courseItemDetail}>
                  <div className={styles.courseDetailContent}>
                    <div className={styles.sectionCourse}>
                      <span>Mục 1: Giới thiệu</span>
                      <button className={styles.btnPreview}>Xem trước</button>
                    </div>
                    <p>Bài học</p>
                    <div className={styles.lessonContainer}>
                      <div className={styles.lessonContent}>
                        <span>
                          <i className="fas fa-play-circle"></i>Các khái niệm về
                          React Component
                        </span>
                        <span>
                          <i className="fas fa-clock"></i> 14:35
                        </span>
                      </div>
                      <div className={styles.lessonContent}>
                        <span>
                          <i className="fas fa-play-circle"></i>Thiết lập môi
                          trường cho Windows
                        </span>
                        <span>
                          <i className="fas fa-clock"></i> 14:35
                        </span>
                      </div>
                      <div className={styles.lessonContent}>
                        <span>
                          <i className="fas fa-play-circle"></i>Tạo ứng dụng
                          React - React-Scripts
                        </span>
                        <span>
                          <i className="fas fa-clock"></i> 14:35
                        </span>
                      </div>
                      <div className={styles.lessonContent}>
                        <span>
                          <i className="fas fa-play-circle"></i>Ghi chú nhanh về
                          dấu ngoặc kép cho string interpolation
                        </span>
                        <span>
                          <i className="fas fa-clock"></i> 14:35
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.courseItemDetail}>
                  <div className={styles.courseDetailContent}>
                    <div className={styles.sectionCourse}>
                      <span>Mục 2: Kiến thức căn bản</span>
                      <button className={styles.btnPreview}>Xem trước</button>
                    </div>
                    <p>Bài học</p>
                    <div className={styles.lessonContainer}>
                      <div className={styles.lessonContent}>
                        <span>
                          <i className="fas fa-play-circle"></i>Trang chủ và
                          thành phần thư mục
                        </span>
                        <span>
                          <i className="fas fa-clock"></i> 14:35
                        </span>
                      </div>
                      <div className={styles.lessonContent}>
                        <span>
                          <i className="fas fa-play-circle"></i>Hướng dẫn khóa
                          học + Liên kết Github
                        </span>
                        <span>
                          <i className="fas fa-clock"></i> 14:35
                        </span>
                      </div>
                      <div className={styles.lessonContent}>
                        <span>
                          <i className="fas fa-play-circle"></i>Trang chủ thương
                          mai điện tử + thiết lập SASS
                        </span>
                        <span>
                          <i className="fas fa-clock"></i> 14:35
                        </span>
                      </div>
                      <div className={styles.lessonContent}>
                        <span>
                          <i className="fas fa-play-circle"></i>Tệp CSS và SCSS
                        </span>
                        <span>
                          <i className="fas fa-clock"></i> 14:35
                        </span>
                      </div>
                      <div className={styles.lessonContent}>
                        <span>
                          <i className="fas fa-play-circle"></i>React 17: Cập
                          nhật các gói + Phiên bản React mới nhất
                        </span>
                        <span>
                          <i className="fas fa-clock"></i> 14:35
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.courseItemDetail}>
                  <div className={styles.courseDetailContent}>
                    <div className={styles.sectionCourse}>
                      <span>Mục 3: Kiến thức chuyên sâu</span>
                      <button className={styles.btnPreview}>Xem trước</button>
                    </div>
                    <p>Bài học</p>
                    <div className={styles.lessonContainer}>
                      <div className={styles.lessonContent}>
                        <span>
                          <i className="fas fa-play-circle"></i>connect() and
                          mapStateToProps
                        </span>
                        <span>
                          <i className="fas fa-clock"></i> 14:35
                        </span>
                      </div>
                      <div className={styles.lessonContent}>
                        <span>
                          <i className="fas fa-play-circle"></i>Trạng thái thư
                          mục vào Redux
                        </span>
                        <span>
                          <i className="fas fa-clock"></i> 14:35
                        </span>
                      </div>
                      <div className={styles.lessonContent}>
                        <span>
                          <i className="fas fa-play-circle"></i>Thành phần Tổng
                          quan về Bộ sưu tập
                        </span>
                        <span>
                          <i className="fas fa-clock"></i> 14:35
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cột phải: Form đăng ký khóa học */}

          <div className="col-span-12 sm:col-span-4 ">
            <div className={styles.sideBarCourseDetail}>
              <img src={courseDetail.hinhAnh} alt="" />
              <div className={styles.coursePrice}>
                <p>
                  <i className="fas fa-bolt"></i>490.000<sup>đ</sup>
                </p>
              </div>

              <button
                type="button"
                className={styles.btnPreview}
                onClick={btnRegisterCourse}
              >
                Đăng ký
              </button>

              <div className={styles.sideBarDetailContent}>
                <ul>
                  <li>
                    <p>
                      Ghi danh: <span>10 học viên</span>
                    </p>
                    <i className="fas fa-user-graduate"></i>
                  </li>
                  <li>
                    <p>
                      Thời gian: <span>18 giờ</span>
                    </p>
                    <i className="far fa-clock far fa-calendar-alt"></i>
                  </li>
                  <li>
                    <p>
                      Bài học: <span>10</span>
                    </p>
                    <i className="fas fa-book"></i>
                  </li>
                  <li>
                    <p>
                      Video: <span>14</span>
                    </p>
                    <i className="fas fa-photo-video"></i>
                  </li>
                  <li>
                    <p>
                      Trình độ: <span>Người mới bắt đầu</span>
                    </p>
                    <i className="fas fa-database"></i>
                  </li>
                </ul>
                <form action="" className={styles.formCoupon}>
                  <input type="text" placeholder="Nhập mã" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
