import React, { useState } from 'react';
import BlogHeader from '../../components/BlogHeader';
import Pagination from '../../components/Pagination';
import './Blog.scss';
import { Search } from '../../components/BlogSearch/Search';


function Blog() {
  const [page, onPageChange] = useState(1);
  return (
    <>
      <BlogHeader
        title="Welcome to our blog"
        subtitle="This is subtitle. Lorem ipsum dolor sit amet."
      />
       <Search />
      <Pagination totalItems={51} pageSize={10} currentPage={page} onPageChange={onPageChange} />
    </>
  );
}


export default Blog;
