import React, { FC } from 'react'
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
import 'react-paginate/theme/basic'

const Pagination: FC<ReactPaginateProps> = (props) => {
  return (
    <ReactPaginate
      className="react-paginate"
      breakLabel="..."
      nextLabel="next >"
      pageRangeDisplayed={5}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
      {...props}
    />
  )
}

export default Pagination
