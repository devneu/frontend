import React, { useState } from 'react';
import { Pagination as AntdPagination } from 'antd';
import './Pagination.scss';

export interface PaginationProps {
  totalItems: number;
  pageSize: number;
}

function Pagination({ totalItems, pageSize }: PaginationProps) {
  const [current, setCurrent] = useState(1);
  return (
    <AntdPagination
      current={current}
      onChange={(page) => setCurrent(page)}
      total={totalItems}
      pageSize={pageSize}
      showSizeChanger={false}
      className="pagination"
    />
  );
}

export default Pagination;
