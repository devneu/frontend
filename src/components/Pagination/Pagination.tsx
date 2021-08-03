import React from 'react';
import { Pagination as AntdPagination } from 'antd';
import './Pagination.scss'

function itemRender(current: number, type: 'page' | 'next' | 'prev' | 'jump-prev' | 'jump-next', originalElement: {}) {
   if (type === 'prev') {
      return <a>Newer</a>;
   }
   if (type === 'next') {
      return <a>Older</a>;
   }
   return originalElement;
}

export interface PaginationProps {
   defaultCurrentPage: number,
   totalItems: number
}

const Pagination = ({ defaultCurrentPage, totalItems }: PaginationProps) => {
   return (
      <AntdPagination
         defaultCurrent={defaultCurrentPage}
         total={totalItems}
         itemRender={itemRender}
         className="pagination" />
   )
}

export default Pagination;