import React, { useState } from "react";
import FormLogin from "./FormLogin";

export default function LoginPage() {
  // Tạo state để theo dõi trạng thái 'active' của form
  const [isActive, setIsActive] = useState(false);

  // Hàm để chuyển sang form đăng ký
  const handleRegisterClick = () => {
    setIsActive(true); // Thêm class active khi nhấn Register
  };

  // Hàm để chuyển sang form đăng nhập
  const handleLoginClick = () => {
    setIsActive(false); // Loại bỏ class active khi nhấn Login
  };
  return (
    <div className="bg-gradient-to-r from-[#e2e2e2] to-[#c9d6ff] flex items-center justify-center flex-col h-screen">
      <FormLogin />
    </div>
  );
}
