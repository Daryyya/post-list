import React, { FC } from "react";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
import styles from "./pagination.module.scss";

const Pagination: FC<ReactPaginateProps> = (props) => {
  return (
    <ReactPaginate
      activeClassName={`${styles.item} ${styles.active}`}
      containerClassName={`${styles.pagination}`}
      disabledClassName={`${styles["disabled-page"]}`}
      marginPagesDisplayed={2}
      nextClassName={`${styles.item} ${styles.next}`}
      pageClassName={`${styles.item} ${styles["pagination-page"]}`}
      previousClassName={`${styles.item} ${styles.previous}`}
      breakLabel="..."
      nextLabel="next >"
      pageRangeDisplayed={2}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
      {...props}
    />
  );
};

export default Pagination;
