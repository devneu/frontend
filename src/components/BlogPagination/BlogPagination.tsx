import React from 'react';
import { Pagination } from 'antd';
import './BlogPagination.scss'


const BlogPagination = () => {
   return (
      <Pagination defaultCurrent={1} total={50} />
   )
}

export default BlogPagination;