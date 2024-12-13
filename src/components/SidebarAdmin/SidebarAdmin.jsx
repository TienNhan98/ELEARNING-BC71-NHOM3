import React, { useState } from "react";
import {
  Users,
  Book,
  UserCog,
  LogOut,
  Menu,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar, onLogout }) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const menuItems = [
    { icon: <Users />, label: "Quản lý người dùng", path: "quanlynguoidung" },
    { icon: <Book />, label: "Quản lý khóa học", path: "quanlykhoahoc" },
  ];

  const settingsItems = [
    { icon: <UserCog />, label: "Cập nhật thông tin", path: "/profile" },
    { icon: <LogOut />, label: "Đăng xuất", onClick: onLogout },
  ];

  return (
    <div
      className={`h-full bg-gray-800 text-white transition-all duration-300 
      ${isOpen ? "w-64" : "w-20"} overflow-y-auto fixed sm:relative z-50`}
    >
      <div className="flex items-center justify-between p-4">
        {isOpen && <h2 className="text-xl font-bold">Quản Trị</h2>}
        <button onClick={toggleSidebar} className="p-2">
          <Menu />
        </button>
      </div>

      {/* Nhóm: Quản lý */}
      <div className="mb-4">
        {isOpen && (
          <div className="px-4 text-gray-400 text-sm mt-4 mb-2">Quản lý</div>
        )}
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "flex items-center p-4 space-x-3 rounded-md no-underline text-white bg-sky-800"
                : "flex items-center p-4 space-x-3 rounded-md no-underline text-gray-400 hover:bg-gray-700"
            }
          >
            {item.icon}
            {isOpen && (
              <span className="ml-4 flex-1 whitespace-normal break-words">
                {item.label}
              </span>
            )}
          </NavLink>
        ))}
      </div>

      {/* Nhóm: Cài đặt */}
      <div className="mb-4">
        {isOpen && (
          <div
            className="px-4 text-gray-400 text-sm mt-4 mb-2 flex items-center justify-between cursor-pointer"
            onClick={toggleSettings}
          >
            Cài đặt
            {isSettingsOpen ? (
              <ChevronUp size={16} />
            ) : (
              <ChevronDown size={16} />
            )}
          </div>
        )}
        {isSettingsOpen && isOpen && (
          <div className="pl-4">
            {settingsItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center p-4 hover:bg-gray-700 cursor-pointer no-underline"
                onClick={item.onClick}
              >
                {item.icon}
                <span className="ml-4 flex-1 whitespace-normal break-words">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const SidebarAdmin = () => {
  // Quản lý trạng thái sidebar tại đây
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    console.log("Đăng xuất");
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        onLogout={handleLogout}
      />

      {/* Nội dung chính */}
      <main
        className={`flex-1  bg-gray-100 transition-all duration-300 
        ${isSidebarOpen ? "ml-20" : "ml-10"} sm:ml-2`}
      >
        <div className="sm:hidden mb-4">
          <button
            onClick={toggleSidebar}
            className="p-2 bg-gray-800 text-white rounded-md"
          >
            <Menu />
          </button>
        </div>
      </main>
    </div>
  );
};

export default SidebarAdmin;
