import React, { useState } from 'react';
import { Pagination as AntdPagination } from 'antd';
import './Pagination.scss';

export interface PaginationProps {
  defaultCurrentPage: number;
  totalItems: number;
  currentPage: number;
  pageSize: number;
}

const Pagination = ({ defaultCurrentPage, totalItems, currentPage, pageSize }: PaginationProps) => {
  const ceilCurrentPage: number = Math.ceil(currentPage);
  const neededPages: number = Math.ceil(totalItems / pageSize);

  let correctCurrentPage: number = ceilCurrentPage;
  if (neededPages < ceilCurrentPage || ceilCurrentPage < 1) {
    correctCurrentPage = defaultCurrentPage;
  }

  const [current, setCurrent] = useState(correctCurrentPage);

  return (
    <AntdPagination
      current={current}
      onChange={(page) => setCurrent(page)}
      defaultCurrent={defaultCurrentPage}
      total={totalItems}
      pageSize={pageSize}
      showSizeChanger={false}
      className="pagination"
    />
  );
};

export default Pagination;
