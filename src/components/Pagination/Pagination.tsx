import React from 'react';
import { Pagination as AntdPagination } from 'antd';
import './Pagination.scss';

export interface PaginationProps {
  totalItems: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

function Pagination({ totalItems, pageSize, currentPage, onPageChange }: PaginationProps) {
  return (
    <AntdPagination
      current={currentPage}
      onChange={(page) => onPageChange(page)}
      total={totalItems}
      pageSize={pageSize}
      showSizeChanger={false}
      className="pagination"
    />
  );
}

export default Pagination;
