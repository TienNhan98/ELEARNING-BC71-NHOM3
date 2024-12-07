import { Navigate } from "react-router-dom";

const AdminGuard = ({ children }) => {
  const isLoggedIn = !!localStorage.getItem("USER_LOGIN");
  const isAdmin = JSON.parse(localStorage.getItem("user"))?.role === "admin"; // Kiểm tra vai trò người dùng

  if (!isLoggedIn || !isAdmin) {
    return <Navigate to="/" replace />; // Chuyển hướng về trang chính nếu không phải admin
  }

  return children; // Render nội dung nếu là admin
};

export default AdminGuard;

// login page -> enter user & pass -> call api -> receive user & token ???
// -> store in localstorage
// -> verify if user logged in -> load local storage
