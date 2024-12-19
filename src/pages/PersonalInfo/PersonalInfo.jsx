import React, { useEffect, useState } from "react";
import styles from "../student/courses/course-detail/DetailPage.module.scss";
import { Button, Col, Form, Input, message, Modal, Row } from "antd";
import avtHocVien from "../student/homepage/asset/listDangVienHangDau/avtHocVien.jpg";
import { callApiNguoiDung } from "../../service/callApiNguoiDung";

export default function PersonalInfo() {
  const [activeTab, setActiveTab] = useState("personalInfo");
  const [infoStudent, setInfoStudent] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    const userLogin = localStorage.getItem("USER_LOGIN");

    if (userLogin) {
      const storedUser = JSON.parse(userLogin);
      // Nếu dữ liệu trong localStorage có trường soDT, đổi thành soDt
      if (storedUser.soDT) {
        storedUser.soDt = storedUser.soDT; // Chuyển đổi
        delete storedUser.soDT; // Xóa trường cũ
      }
      setInfoStudent(storedUser);
      console.log("🚀 ~ useEffect ~ storedUser:", storedUser);
    } else {
      callApiNguoiDung
        .thongTinTaiKhoan()
        .then((result) => {
          console.log("dataThongTin", result.data);
          // Đảm bảo dữ liệu trả về từ API có soDt
          setInfoStudent(result.data);
          localStorage.setItem("USER_LOGIN", JSON.stringify(result.data));
        })
        .catch((err) => {
          console.error("Lỗi khi lấy thông tin tài khoản:", err);
        });
    }
  }, []);

  // Phần cập NHẬT
  const handleUpdateInfo = (values) => {
    const updatedData = {
      ...values,
      maNhom: infoStudent.maNhom,
      maLoaiNguoiDung: infoStudent.maLoaiNguoiDung,
      taiKhoan: infoStudent.taiKhoan,
    };

    // Nếu mật khẩu không được nhập thì loại bỏ nó
    if (!values.matKhau) delete updatedData.matKhau;
    console.log("Dữ liệu gửi lên API:", updatedData); // Kiểm tra dữ liệu
    // Gọi API cập nhật
    callApiNguoiDung
      .capNhatThongTinNguoiDung(updatedData)
      .then((result) => {
        message.success("Cập nhật thông tin thành công!");

        // Cập nhật state và local storage
        console.log("Dữ liệu sau khi cập nhật:", result.data);
        localStorage.setItem("USER_LOGIN", JSON.stringify(result));
        setInfoStudent(result.data);
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

  const personalInfoContent = () => {
    return (
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
                {infoStudent.maLoaiNguoiDung === "HV"
                  ? "Học Viên"
                  : infoStudent.maLoaiNguoiDung === "GV"
                  ? "Giáo Viên"
                  : null}
              </p>
            </div>
            <div>
              <Button
                style={{ backgroundColor: "#f6ba35", color: "#fff" }}
                onClick={() => {
                  setIsModalOpen(true);
                  form.setFieldsValue({
                    hoTen: infoStudent.hoTen,
                    email: infoStudent.email,
                    matKhau: "", // Đặt lại password cho user nhập mới
                    soDT: infoStudent.soDt,
                  });
                }}
              >
                CẬP NHẬT
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  };

  // Nội dung tab khóa học
  const coursesContent = (
    <div className="p-4">
      <h3 className="text-xl font-bold mb-2">Khóa học</h3>
      {/* Kiểm tra nếu chiTietKhoaHocGhiDanh có dữ liệu */}
      {infoStudent?.chiTietKhoaHocGhiDanh &&
      infoStudent.chiTietKhoaHocGhiDanh.length > 0 ? (
        <ul className="list-disc ml-5">
          {infoStudent.chiTietKhoaHocGhiDanh.map((course) => (
            <li key={course.maKhoaHoc}>
              <strong>{course.tenKhoaHoc}</strong>
            </li>
          ))}
        </ul>
      ) : (
        <p>Không có khóa học nào.</p> // Thông báo nếu không có khóa học
      )}
    </div>
  );
  console.log("🚀 ~ PersonalInfo ~ infoStudent:", infoStudent);

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
              {/* Phần thông tin avatar */}
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

              {/* Phần thông tin chi tiết */}
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
                  {activeTab === "personalInfo" && personalInfoContent()}
                  {activeTab === "courses" && coursesContent}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal cập nhật */}
      <Modal
        title="Cập nhật thông tin cá nhân"
        visible={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={() => form.submit()} // Submit form khi nhấn OK
        okText="Cập nhật"
        cancelText="Hủy"
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleUpdateInfo} // Xử lý khi submit form
        >
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
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
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
