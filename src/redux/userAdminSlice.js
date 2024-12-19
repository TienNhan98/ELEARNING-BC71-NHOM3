// src/redux/userAdminSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { callApiNguoiDung } from "../service/callApiNguoiDung";

// Async thunk để gọi API lấy tât cả danh sách người dùng
export const fetchUserListsAll = createAsyncThunk(
  "userAdmin/fetchUsersAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await callApiNguoiDung.getUserListAll();

      return response.data;
    } catch (error) {
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
    userListAll: [],
    status: "idle",
    error: null,
    totalPages: 0,
  },
  reducers: {
    // Thêm các reducer nếu cần
  },
  extraReducers: (builder) => {
    builder
      // .addCase(fetchUserListsAdmin.pending, (state) => {
      //   state.status = "loading";
      //   state.error = null;
      // })
      // .addCase(fetchUserListsAdmin.fulfilled, (state, action) => {
      //   state.status = "succeeded";
      //   state.totalPages = action.payload.totalPages;
      //   state.userLists = action.payload.items; // Cập nhật danh sách người dùng
      // })
      // .addCase(fetchUserListsAdmin.rejected, (state, action) => {
      //   state.status = "failed";
      //   state.error = action.payload || "Không thể lấy danh sách người dùng.";
      // })

      .addCase(fetchUserListsAll.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchUserListsAll.fulfilled, (state, action) => {
        state.userListAll = action.payload; // Dữ liệu trả về từ API
      })
      .addCase(fetchUserListsAll.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Không thể lấy danh sách người dùng.";
      });
  },
});

export default userAdminSlice.reducer;
