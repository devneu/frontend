import React from 'react';
import { Pagination } from 'antd';
import './BlogPagination.scss'

function itemRender(current: number, type: 'page' | 'next' | 'prev' | 'jump-prev' | 'jump-next', originalElement: {}) {
   if (type === 'prev') {
      return <a>Newer</a>;
   }
   if (type === 'next') {
      return <a>Older</a>;
   }
   console.log(originalElement);

   return originalElement;
}

const BlogPagination = () => {
   return (
      <Pagination
         defaultCurrent={1}
         total={51}
         itemRender={itemRender}
         className="blog__pagination" />
   )
}

export default BlogPagination;