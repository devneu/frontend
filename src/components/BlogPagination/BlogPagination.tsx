import React from 'react';
import { Pagination } from 'antd';
import './BlogPagination.scss'

<<<<<<< HEAD
function itemRender(current: number, type: 'page' | 'next' | 'prev' | 'jump-prev' | 'jump-next', originalElement: {}) {
=======
function itemRender(current: number, type: 'page' | 'next' | 'prev' | 'jump-prev' | 'jump-next', originalElement: any) {
>>>>>>> d32309b (DEV-39. Pagination added to Blog page)
   if (type === 'prev') {
      return <a>Newer</a>;
   }
   if (type === 'next') {
      return <a>Older</a>;
   }
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