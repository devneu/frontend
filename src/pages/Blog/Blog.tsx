import Layout, { Content } from 'antd/lib/layout/layout';
import BlogHeader from '../../components/BlogHeader';
import BlogPagination from '../../components/BlogPagination';
import './Blog.scss';

const Blog = () => {
   return (
      <>
         <BlogHeader
            title="Post Title"
            subtitle="Post Subtitle" />
         <BlogPagination />
      </>
   )
}

export default Blog