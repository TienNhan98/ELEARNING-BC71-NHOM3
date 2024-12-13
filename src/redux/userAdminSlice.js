// src/redux/userAdminSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { callApiNguoiDung } from "../service/callApiNguoiDung";

// Async thunk để gọi API lấy danh sách người dùng
export const fetchUserListsAdmin = createAsyncThunk(
  "userAdmin/fetchUsers",
  async (currentPage, { rejectWithValue }) => {
    try {
      const response = await callApiNguoiDung.getUserListsAdmin(currentPage);
      return response.data; // Giả sử API trả về mảng người dùng
    } catch (error) {
      // Kiểm tra lỗi từ server
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// Slice cho quản lý người dùng
const userAdminSlice = createSlice({
  name: "userAdminSlice",
  initialState: {
    userLists: [],
    status: "idle",
    error: null,
    totalPages: 0,
  },
  reducers: {
    // Thêm các reducer nếu cần
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserListsAdmin.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchUserListsAdmin.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.totalPages = action.payload.totalPages;
        state.userLists = action.payload.items; // Cập nhật danh sách người dùng
      })
      .addCase(fetchUserListsAdmin.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Không thể lấy danh sách người dùng.";
      });
  },
});

export default userAdminSlice.reducer;
