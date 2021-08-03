import React from 'react';
import { Pagination as AntdPagination } from 'antd';
import './Pagination.scss'

export interface PaginationProps {
   defaultCurrentPage: number,
   totalItems: number
}

const Pagination = ({ defaultCurrentPage, totalItems }: PaginationProps) => {
   return (
      <AntdPagination
         defaultCurrent={defaultCurrentPage}
         total={totalItems}
         className="pagination" />
   )
}

export default Pagination;