import React, { useEffect, useState } from "react";
import styles from "../student/courses/course-detail/DetailPage.module.scss";
import { Button } from "antd";
import cauPhuc from "../../pages/student/homepage/asset/listDangVienHangDau/cauPhuc.jpg";
import { callApiNguoiDung } from "../../service/callApiNguoiDung";
// import { useLocation } from "react-router-dom";

export default function PersonalInfo() {
  // State để quản lý tab hiện tại
  const [activeTab, setActiveTab] = useState("personalInfo");
  const [infoStudent, setInfoStudent] = useState([]);
  useEffect(() => {
    callApiNguoiDung
      .thongTinTaiKhoan()
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Nội dung của các tab
  const personalInfoContent = (
    <div className="p-4">
      <h3 className="text-xl font-bold mb-2">Thông tin cá nhân</h3>
      <p>
        <strong>Họ và tên:</strong> Nguyễn Văn A
      </p>
      <p>
        <strong>Email:</strong> nguyenvana@gmail.com
      </p>
      <p>
        <strong>Số điện thoại:</strong> 0123456789
      </p>
      <p>
        <strong>Địa chỉ:</strong> 123 Đường ABC, Thành phố XYZ
      </p>
    </div>
  );

  const coursesContent = (
    <div className="p-4">
      <h3 className="text-xl font-bold mb-2">Khóa học</h3>
      <ul className="list-disc ml-5">
        <li>Khóa học ReactJS cơ bản</li>
        <li>Khóa học NodeJS nâng cao</li>
        <li>Khóa học Tailwind CSS</li>
      </ul>
    </div>
  );
  return (
    <div>
      <section>
        <div>
          <div className={styles.titleDetailCourse}>
            <h3>Thông Tin Cá Nhân</h3>
            <p>Thông tin học viên</p>
          </div>
          <div className="mx-5 py-8">
            {/* Grid chia 2-8 */}
            <div className="grid grid-cols-12 gap-2 h-full">
              {/* Phần 2 */}
              <div className="col-span-3 p-4 rounded-lg shadow-lg flex flex-col justify-between">
                <div className="flex flex-col items-center text-center">
                  <img
                    src="https://via.placeholder.com/100"
                    alt="Avatar"
                    className="w-24 h-24 rounded-full mb-4"
                  />
                  <h2 className="text-lg font-semibold">Nguyễn Văn A</h2>
                  <p className="text-sm text-gray-500">Front-End Developer</p>
                  <Button type="primary" className="mt-4">
                    Hồ sơ cá nhân
                  </Button>
                </div>
              </div>

              {/* Phần 8 */}
              <div className="col-span-9 bg-white p-4 rounded-lg shadow-lg flex flex-col">
                <div className="flex justify-start mb-4">
                  <Button
                    type={activeTab === "personalInfo" ? "primary" : "default"}
                    className="mr-2"
                    onClick={() => setActiveTab("personalInfo")}
                  >
                    Thông tin cá nhân
                  </Button>
                  <Button
                    type={activeTab === "courses" ? "primary" : "default"}
                    onClick={() => setActiveTab("courses")}
                  >
                    Khóa học
                  </Button>
                </div>

                {/* Nội dung hiển thị dựa trên tab */}
                <div className="flex-1">
                  {activeTab === "personalInfo" && personalInfoContent}
                  {activeTab === "courses" && coursesContent}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
