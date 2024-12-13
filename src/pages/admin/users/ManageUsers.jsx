// src/components/ManageUsers.jsx
import React, { useEffect, useState } from "react";
import { Settings } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { fetchUserListsAdmin } from "../../../redux/userAdminSlice";
import styles from "../../student/courses/course-all/course-all.module.scss";
import AddUserModal from "./CreateUserModal";

export default function ManageUsers() {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Lấy dữ liệu từ store
  const { userLists, status, error, totalPages } = useSelector(
    (state) => state.userAdminSlice
  );

  // Trạng thái phân trang
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfFirstUser = (currentPage - 1) * 10;

  useEffect(() => {
    console.log("Fetching users for page:", currentPage);

    dispatch(fetchUserListsAdmin(currentPage));
  }, [currentPage, dispatch]);

  //hàm thêm user
  const handleAddUser = () => {
    setIsModalOpen(true);
  };

  // Hàm xử lý các nút trong cột Cài đặt
  const handleRegister = (user) => {
    // Xử lý ghi danh cho người dùng
    console.log("Ghi danh người dùng:", user);
    // Bạn có thể mở một modal hoặc thực hiện hành động khác ở đây
  };

  const handleEdit = (user) => {
    // Mở modal chỉnh sửa và đặt dữ liệu người dùng vào state
    // setEditUserData(user);
    // setIsEditModalOpen(true);
  };

  const handleDelete = (userId) => {
    // Xử lý xóa người dùng
    if (window.confirm("Bạn có chắc chắn muốn xóa người dùng này?")) {
      // Dispatch một action để xóa người dùng từ Redux store
      // dispatch(deleteUser(userId));
    }
  };

  // hàm render table
  const renderUserTable = () => {
    return userLists.length > 0 ? (
      userLists.map((user, index) => (
        <tr key={user.id} className="hover:bg-gray-100">
          <td className="border border-gray-300 p-2">
            {indexOfFirstUser + index + 1}
          </td>
          <td className="border border-gray-300 p-2">{user.taiKhoan}</td>
          <td className="border border-gray-300 p-2">{user.maLoaiNguoiDung}</td>
          <td className="border border-gray-300 p-2">{user.hoTen}</td>
          <td className="border border-gray-300 p-2">{user.email}</td>
          <td className="border border-gray-300 p-2">{user.soDT}</td>
          <td className="border border-gray-300 p-2 text-center">
            <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
              {/* Nút Ghi danh */}
              <button
                className="p-2 bg-green-500 text-white rounded hover:bg-green-600 w-full sm:w-auto"
                onClick={() => handleRegister(user)}
              >
                Ghi danh
              </button>

              {/* Nút Sửa */}
              <button
                className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full sm:w-auto"
                onClick={() => handleEdit(user)}
              >
                Sửa
              </button>

              {/* Nút Xóa */}
              <button
                className="p-2 bg-red-500 text-white rounded hover:bg-red-600 w-full sm:w-auto"
                onClick={() => handleDelete(user.id)}
              >
                Xóa
              </button>
            </div>
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td
          colSpan="7"
          className="border border-gray-300 p-4 text-center text-gray-500"
        >
          Không có người dùng nào.
        </td>
      </tr>
    );
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow overflow-x-auto">
      <h2 className="text-2xl font-semibold mb-4">Quản lý người dùng</h2>
      {/* Nút thêm người dùng */}
      <div className="flex justify-start mb-4">
        <button
          className="p-2 bg-green-500 text-white rounded hover:bg-green-600 w-full sm:w-auto"
          onClick={handleAddUser} // Thêm hàm xử lý khi nhấn nút
        >
          Thêm người dùng
        </button>
        {/* Modal */}
        {isModalOpen && (
          <AddUserModal
            isOpen={isModalOpen}
            closeModal={() => setIsModalOpen(false)} // Đóng modal
          />
        )}
      </div>

      {/* Hiển thị loading */}
      {status === "loading" && (
        <p className="text-gray-500">Đang tải dữ liệu...</p>
      )}

      {/* Hiển thị lỗi */}
      {status === "failed" && <p className="text-red-500">{error}</p>}

      {/* Hiển thị bảng khi dữ liệu đã được tải */}
      {status === "succeeded" && (
        <>
          <div className="min-w-full">
            <table className="min-w-full border-collapse border border-gray-300  text-center">
              <thead>
                <tr className="bg-gray-200 ">
                  <th className=" border border-gray-300 p-2">STT</th>
                  <th className="border border-gray-300 p-2 ">Tài khoản</th>
                  <th className="border border-gray-300 p-2">Người dùng</th>
                  <th className="border border-gray-300 p-2">Họ và tên</th>
                  <th className="border border-gray-300 p-2">Email</th>
                  <th className="border border-gray-300 p-2">Số điện thoại</th>
                  <th className="border border-gray-300 p-2 h-16 flex items-center justify-center ">
                    <Settings size={20} />
                  </th>
                </tr>
              </thead>

              <tbody>{renderUserTable()}</tbody>
            </table>
          </div>

          {/* Phân trang */}
          <div className="flex justify-center mt-10 mb-10">
            <ReactPaginate
              forcePage={currentPage - 1}
              pageRangeDisplayed={3}
              pageCount={totalPages}
              containerClassName={styles.paginationPages}
              pageClassName={styles.pageItem}
              pageLinkClassName={styles.pageLinkPages}
              nextClassName={styles.pageItem}
              nextLinkClassName={styles.pageLinkPages}
              previousClassName={styles.pageItem}
              previousLinkClassName={styles.pageLinkPages}
              breakClassName={styles.pageItem}
              breakLinkClassName={styles.pageLinkPages}
              activeClassName={styles.active}
              nextLabel={<i className="bi bi-arrow-right "></i>}
              previousLabel={<i className="bi bi-arrow-left "></i>}
              onPageChange={({ selected }) => {
                setCurrentPage(selected + 1);
              }}
            />
          </div>
        </>
      )}
    </div>
  );
}
