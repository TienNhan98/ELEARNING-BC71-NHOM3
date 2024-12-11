import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { callApiKhoaHoc } from "../service/callApiKhoaHoc";

// Thunk  để lấy danh sách tất cả các khóa học
// export const fetchAllCourses = createAsyncThunk(
//   "'courses/fetchAllCourses",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await http.get(
//         "/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01"
//       );
//       return response.data;
//     } catch (error) {
//       if (error.response && error.response.data) {
//         return rejectWithValue(error.response.data);
//       }
//       return rejectWithValue(error.message);
//     }
//   }
// );

// Thunk để lấy danh sách khóa học phân trang
export const fetchCoursesPagination = createAsyncThunk(
  "'courses/fetchCoursesPagination",
  async (currentPage) => {
    try {
      const response = await callApiKhoaHoc.getListCoursePagination(
        currentPage
      );
      console.log("🚀 ~ response:", response.data);

      return response.data;
    } catch (error) {
      // Kiểm tra nếu lỗi có phản hồi từ server
      return error.message;
    }
  }
);

const courseSlice = createSlice({
  name: "courseSlice",
  initialState: {
    coursesPagination: [],
    allCourses: [],
    currentPage: 1,
    pageSize: 12,
    totalPages: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoursesPagination.fulfilled, (state, action) => {
        state.coursesPagination = action.payload.items; // Điều chỉnh tùy theo cấu trúc dữ liệu API
        state.totalPages = action.payload.totalPages; //
      })
      .addCase(fetchCoursesPagination.rejected, (state, action) => {
        state.courses = [];
      });
    // Xử lý các trạng thái cho fetchAllCourses
    //   .addCase(fetchAllCourses.pending, (state) => {
    //     state.loading = true;
    //     state.error = "";
    //   })
    //   .addCase(fetchAllCourses.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.allCourses = action.payload; // Điều chỉnh tùy theo cấu trúc dữ liệu API
    //     state.error = "";
    //   })
    //   .addCase(fetchAllCourses.rejected, (state, action) => {
    //     state.loading = false;
    //     state.allCourses = [];
    //     state.error = action.payload || "Something went wrong";
    //   });
  },
});

export default courseSlice.reducer;
