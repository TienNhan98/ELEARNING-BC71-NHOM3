import React, { useState } from "react";
import styles from "./LoginPage.module.scss";
import { Facebook, Github, Linkedin, Mail } from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import swal from "sweetalert";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginActionService } from "../../redux/userSlice";

export default function FormLogin() {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const [isActive, setIsActive] = useState(false);

  // Hàm handle đăng nhập
  const handleLogin = (values) => {
    console.log(values);

    dispatch(loginActionService(values))
      .unwrap()
      .then((result) => {
        let dataJson = JSON.stringify(result);
        localStorage.setItem("USER_LOGIN", dataJson);

        if (result.maLoaiNguoiDung == "GV") {
          navigate("/admin");
        } else {
          navigate("/"); // không gây reload trang
        }
        console.log("🚀 ~ result:", result);
      })
      .catch((err) => {
        console.log("sdg", err);

        swal({
          title: "Đăng nhập thất bại.",
          text: "Vui lòng thử lại.",
          icon: "warning",
          timer: 2000,
          button: false,
        });
      });
  };

  // Formik hook cho form đăng nhập
  const formikLogin = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },

    onSubmit: handleLogin,
  });

  return (
    <div className={`${styles.container} ${isActive ? styles.active : ""}`}>
      {/* Sign Up Form */}
      <div className={`${styles.formContainer} ${styles.signUp}`}>
        <form>
          <h1>Đăng ký</h1>

          <input type="text" placeholder="Tài khoản" />
          <input type="text" placeholder="Họ tên" />
          <input type="password" placeholder="Mật khẩu" />
          <input type="email" placeholder="Email" />
          <input type="phone" placeholder="Số điện thoại" />
          <select name="maNhom">
            <option value="GP01">GP01</option>
            <option value="GP02">GP02</option>
            <option value="GP03">GP03</option>
            <option value="GP04">GP04</option>
            <option value="GP05">GP05</option>
            <option value="GP06">GP06</option>
            <option value="GP07">GP07</option>
            <option value="GP08">GP08</option>
            <option value="GP09">GP09</option>
            <option value="GP010">GP010</option>
          </select>
          <button type="submit">Đăng ký</button>
        </form>
      </div>

      {/* Sign In Form */}
      <div className={`${styles.formContainer} ${styles.signIn}`}>
        <form onSubmit={formikLogin.handleSubmit}>
          <h1>Đăng nhập</h1>

          <div className={styles.socialIcons}>
            <a href="#" aria-label="Facebook">
              <i>
                <Facebook size={20} />
              </i>
            </a>
            <a href="#" aria-label="Mail">
              <i>
                <Mail size={20} />
              </i>
            </a>
            <a href="#" aria-label="Github">
              <i>
                <Github size={20} />
              </i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i>
                <Linkedin size={20} />
              </i>
            </a>
          </div>

          <span>hoặc sử dụng tài khoản đã đăng ký của bạn</span>

          <input
            type="text"
            placeholder="Tài khoản"
            name="taiKhoan"
            value={formikLogin.values.taiKhoan}
            onChange={formikLogin.handleChange}
            onBlur={formikLogin.handleBlur}
          />

          <input
            type="password"
            placeholder="Mật khẩu"
            name="matKhau"
            value={formikLogin.values.matKhau}
            onChange={formikLogin.handleChange}
            onBlur={formikLogin.handleBlur}
          />

          <a href="#">Quên mật khẩu?</a>
          <button type="submit">Đăng nhập</button>
        </form>
      </div>

      {/* Toggle Container */}
      <div className={styles.toggleContainer}>
        <div className={styles.toggle}>
          {/* Toggle Left Panel */}
          <div className={`${styles.togglePanel} ${styles.toggleLeft}`}>
            <h1>Chào mừng bạn đã trở lại!</h1>
            <p>Vui lòng đăng nhập để kết nối với tài khoản của bạn</p>
            <button
              type="button"
              className={styles.hidden}
              onClick={() => setIsActive(false)}
            >
              Đăng nhập
            </button>
          </div>

          {/* Toggle Right Panel */}
          <div className={`${styles.togglePanel} ${styles.toggleRight}`}>
            <h1>Xin chào!</h1>
            <p>
              Vui lòng nhấn đăng ký để thiết lập thông tin tài khoản của bạn!
            </p>
            <button
              type="button"
              className={styles.hidden}
              onClick={() => setIsActive(true)}
            >
              Đăng ký
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
