import React from "react";
import { useParams, useLocation } from "react-router-dom";

const SearchResultsPage = () => {
  const { searchValue } = useParams(); // Lấy giá trị từ URL
  const location = useLocation();
  const { results } = location.state || { results: [] }; // Tránh lỗi nếu state rỗng

  return (
    <div>
      <h2>Kết Quả Tìm Kiếm cho "{searchValue}"</h2>
      {results.length > 0 ? (
        results.map((course) => (
          <div key={course.maKhoaHoc}>
            <h3>{course.tenKhoaHoc}</h3>
            <p>{course.moTa}</p>
            <img src={course.hinhAnh} alt={course.tenKhoaHoc} />
          </div>
        ))
      ) : (
        <p>Không tìm thấy kết quả nào.</p>
      )}
    </div>
  );
};

export default SearchResultsPage;
