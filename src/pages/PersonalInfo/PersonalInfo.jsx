import React, { useEffect, useState } from "react";
import styles from "../student/courses/course-detail/DetailPage.module.scss";
import { Button, Col, Form, Input, message, Modal, Row } from "antd";
import avtHocVien from "../student/homepage/asset/listDangVienHangDau/avtHocVien.jpg";
import { callApiNguoiDung } from "../../service/callApiNguoiDung.js";

export default function PersonalInfo() {
  const [activeTab, setActiveTab] = useState("personalInfo");
  const [infoStudent, setInfoStudent] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    const userLogin = localStorage.getItem("USER_LOGIN");

    if (userLogin) {
      const storedUser = JSON.parse(userLogin);
      if (storedUser.soDT) {
        storedUser.soDt = storedUser.soDT;
        delete storedUser.soDT;
      }
      setInfoStudent(storedUser);
      console.log("🚀 ~ useEffect ~ storedUser:", storedUser);
    } else {
      callApiNguoiDung
        .thongTinTaiKhoan()
        .then((result) => {
          if (!result || !result.data) {
            throw new Error("Dữ liệu không hợp lệ!");
          }
          console.log("dataThongTin", result.data);
          setInfoStudent(result.data);
          localStorage.setItem("USER_LOGIN", JSON.stringify(result.data));
        })
        .catch((err) => {
          message.error("Không thể tải thông tin tài khoản!");
          console.error("Lỗi khi gọi API:", err);
        });
    }
  }, []);

  const handleUpdateInfo = (values) => {
    // Lấy dữ liệu hiện tại từ state hoặc localStorage
    const currentUserData =
      JSON.parse(localStorage.getItem("USER_LOGIN")) || {};

    // Chỉ cập nhật các thông tin được thay đổi
    const updatedData = {
      ...currentUserData, // Giữ nguyên dữ liệu hiện tại
      ...values, // Ghi đè thông tin mới từ form
      maNhom: currentUserData.maNhom, // Đảm bảo giữ mã nhóm
      maLoaiNguoiDung: currentUserData.maLoaiNguoiDung, // Loại người dùng
      taiKhoan: currentUserData.taiKhoan, // Tài khoản
    };

    // Nếu mật khẩu không được nhập thì loại bỏ nó
    if (!values.matKhau) {
      message.warning(
        "Mật khẩu hiện tại không được nhập, sẽ sử dụng mật khẩu cũ."
      );
      delete updatedData.matKhau;
    }

    console.log("Dữ liệu gửi lên API:", updatedData);

    // Gọi API cập nhật
    callApiNguoiDung
      .capNhatThongTinNguoiDung(updatedData)
      .then((result) => {
        message.success("Cập nhật thông tin thành công!");

<<<<<<< HEAD
        // Cập nhật lại state và localStorage nhưng giữ nguyên accessToken
        const updatedUserData = { ...currentUserData, ...result.data };
        localStorage.setItem("USER_LOGIN", JSON.stringify(updatedUserData));
        setInfoStudent(updatedUserData);

=======
        // Cập nhật state và local storage
        console.log("Dữ liệu sau khi cập nhật:", result.data);
        localStorage.setItem("USER_LOGIN", JSON.stringify(result));
        setInfoStudent(result.data);
>>>>>>> feature-login-admin
        // Reset form và đóng modal
        form.resetFields();
        setIsModalOpen(false);

        console.log("LocalStorage mới:", localStorage.getItem("USER_LOGIN"));
      })
      .catch((err) => {
        message.error("Cập nhật thông tin thất bại!");
        console.error("Lỗi cập nhật:", err);
      });
  };

  const personalInfoContent = () => (
    <div className="p-4">
      <Row>
        <Col span={12}>
          <div>
            <p>
              <strong>Họ và tên:</strong> {infoStudent.hoTen}
            </p>
            <p>
              <strong>Email:</strong> {infoStudent.email}
            </p>
            <p>
              <strong>Số điện thoại:</strong> {infoStudent.soDt}
            </p>
          </div>
        </Col>
        <Col span={12}>
          <div>
            <p>
              <strong>Tài Khoản:</strong> {infoStudent.taiKhoan}
            </p>
            <p>
              <strong>Nhóm:</strong> {infoStudent.maNhom}
            </p>
            <p>
              <strong>Đối Tượng:</strong>{" "}
              {infoStudent.maLoaiNguoiDung === "HV" ? "Học Viên" : "Giáo Viên"}
            </p>
          </div>
          <Button
            style={{ backgroundColor: "#f6ba35", color: "#fff" }}
            onClick={() => {
              setIsModalOpen(true);
              form.setFieldsValue({
                hoTen: infoStudent.hoTen,
                email: infoStudent.email,
                matKhau: "",
                soDT: infoStudent.soDt,
              });
            }}
          >
            CẬP NHẬT
          </Button>
        </Col>
      </Row>
    </div>
  );

  const coursesContent = (
    <div className="p-4">
      <h3 className="text-xl font-bold mb-2">Khóa học</h3>
      {infoStudent?.chiTietKhoaHocGhiDanh?.length > 0 ? (
        <ul className="list-disc ml-5">
          {infoStudent.chiTietKhoaHocGhiDanh.map((course) => (
            <li key={course.maKhoaHoc}>
              <strong>{course.tenKhoaHoc}</strong>
            </li>
          ))}
        </ul>
      ) : (
        <p>Không có khóa học nào.</p>
      )}
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
            <div className="grid grid-cols-12 gap-2 h-full">
              <div className="col-span-3 p-4 rounded-lg shadow-lg flex flex-col justify-between">
                <div className="flex flex-col items-center text-center">
                  <img
                    src={avtHocVien}
                    alt="Avatar"
                    className="w-36 h-36 rounded-full mb-4 border-2"
                    style={{ objectFit: "cover" }}
                  />
                  <h2 className="text-lg font-semibold">{infoStudent.hoTen}</h2>
                  <p className="text-sm text-gray-500">Developer</p>
                  <Button type="primary" className="mt-4">
                    Hồ sơ cá nhân
                  </Button>
                </div>
              </div>

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

                <div className="flex-1">
                  {activeTab === "personalInfo"
                    ? personalInfoContent()
                    : coursesContent}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal
        title="Cập nhật thông tin cá nhân"
        visible={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={() => form.submit()}
        okText="Cập nhật"
        cancelText="Hủy"
      >
        <Form form={form} layout="vertical" onFinish={handleUpdateInfo}>
          <Form.Item
            label="Họ và tên"
            name="hoTen"
            rules={[{ required: true, message: "Vui lòng nhập họ và tên!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Vui lòng nhập email!" },
              { type: "email", message: "Email không hợp lệ!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Mật khẩu"
            name="matKhau"
            rules={[{ min: 6, message: "Mật khẩu phải có ít nhất 6 ký tự!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Số điện thoại"
            name="soDT"
            rules={[
              { required: true, message: "Vui lòng nhập số điện thoại!" },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
