import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { callApiKhoaHoc } from "../service/callApiKhoaHoc";

// call API lấy danh sách khóa học
export const fetchCourseListAdmin = createAsyncThunk(
  "courseAdmin/fetchCourses",
  async (_, rejectWithValue) => {
    try {
      const response = await callApiKhoaHoc.layDanhSachKhoaHoc();

      return response.data;
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
const initialState = {
  courseLists: [],
  loading: false,
  error: null,
};

const courseAdminSlice = createSlice({
  name: "courseAdminSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourseListAdmin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCourseListAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.courseLists = action.payload || [];
      })
      .addCase(fetchCourseListAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Unable to fetch course list.";
      });
  },
});

export const { setCurrentPage } = courseAdminSlice.actions;
export default courseAdminSlice.reducer;