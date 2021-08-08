import React, { useState } from 'react';
import { Pagination as AntdPagination } from 'antd';
import './Pagination.scss'

export interface PaginationProps {
   defaultCurrentPage: number,
   totalItems: number,
   currentPage: number,
   pageSize: number,
}

const Pagination = ({ defaultCurrentPage, totalItems, currentPage, pageSize }: PaginationProps) => {
   currentPage = Math.ceil(currentPage);
   const neededPages = Math.ceil(totalItems / pageSize);

   if ((neededPages < currentPage) || (currentPage < 1)) {
      currentPage = defaultCurrentPage
   }

   const [current, setCurrent] = useState(currentPage);

   return (
      <AntdPagination
         current={current}
         onChange={(page) => setCurrent(page)}
         defaultCurrent={defaultCurrentPage}
         total={totalItems}
         pageSize={pageSize}
         showSizeChanger={false}
         className="pagination" />
   )
}

export default Pagination;