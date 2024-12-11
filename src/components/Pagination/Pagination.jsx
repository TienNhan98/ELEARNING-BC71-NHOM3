import React, { useEffect } from "react";
import styles from "../../pages/student/courses/course-all/course-all.module.scss";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCoursesPagination } from "../../redux/courseSlice";

export default function Pagination() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchCoursesPagination(currentPage));
  }, [currentPage]);
  return (
    <div className="flex justify-center mt-10 mb-10">
      <ReactPaginate
        forcePage={currentPage - 1}
        pageRangeDisplayed={3}
        pageCount={8}
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
  );
}
