import React from "react";
import { NavLink } from "react-router-dom";
import { FaUser, FaUserEdit, FaDoorOpen } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="divide-y dark:divide-gray-600">
      <div className="flex flex-col items-center p-2 space-x-3 rounded-md">
        <img
          src="https://source.unsplash.com/100x100/?portrait"
          alt=""
          className="w-12 h-12 rounded-full dark:bg-gray-500"
        />
        <div>
          <h2 className="text-lg font-semibold text-black">Leroy Jenkins</h2>
          <span className="flex items-center space-x-1">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-xs hover:underline dark:text-gray-600"
            ></a>
          </span>
        </div>
      </div>
      {/* Quản lý người dùng và khóa học */}
      <ul className="p-0 space-y-1 text-sm">
        <li className="dark:bg-gray-100 dark:text-gray-900">
          <NavLink
            to="quanlynguoidung"
            className={({ isActive }) =>
              isActive
                ? "flex flex-col items-center p-2 space-x-3 rounded-md no-underline text-white bg-sky-800"
                : "flex flex-col items-center p-2 space-x-3 rounded-md no-underline text-gray-700 hover:bg-blue-100"
            }
          >
            <FaUser className="mt-2 text-2xl" />
            <span className="flex-1 whitespace-normal mt-2">
              Quản lý người dùng
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="quanlykhoahoc"
            className={({ isActive }) =>
              isActive
                ? "flex flex-col items-center p-2 space-x-3 rounded-md no-underline text-white bg-sky-800	"
                : "flex flex-col items-center p-2 space-x-3 rounded-md no-underline text-gray-700 hover:bg-blue-100"
            }
          >
            <FaUser className="text-2xl" />
            <span className="flex-1 whitespace-normal mt-2">
              Quản lý khóa học
            </span>
          </NavLink>
        </li>
      </ul>

      {/* Cập nhật thông tin và đăng xuất */}
      <ul className="mt-2 p-0 space-y-1 text-sm">
        <li>
          <NavLink
            to="capnhatthongtin"
            className={({ isActive }) =>
              isActive
                ? "flex flex-col items-center p-2 space-x-3 rounded-md no-underline text-white bg-sky-800"
                : "flex flex-col items-center p-2 space-x-3 rounded-md no-underline text-gray-700 hover:bg-blue-100"
            }
          >
            <FaUserEdit className="mt-2 text-2xl	" />
            <span className="flex-1 whitespace-normal mt-2">
              Cập nhật thông tin
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="dangxuat"
            className={({ isActive }) =>
              isActive
                ? "flex flex-col items-center p-2 space-x-3 rounded-md no-underline text-white bg-green-300"
                : "flex flex-col items-center p-2 space-x-3 rounded-md no-underline text-gray-700 hover:bg-blue-100"
            }
          >
            <FaDoorOpen className="text-2xl" />
            <span className="flex-1 whitespace-normal mt-2">Đăng xuất</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
