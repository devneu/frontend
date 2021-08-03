import Layout, { Content } from 'antd/lib/layout/layout';
import BlogHeader from '../../components/BlogHeader';
import Pagination from '../../components/Pagination';
import './Blog.scss';

const Blog = () => {
   return (
      <>
         <BlogHeader
            title="Welcome to our blog"
            subtitle="This is subtitle. Lorem ipsum dolor sit amet." />
         <Pagination
            defaultCurrentPage={1}
            totalItems={50} />
      </>
   )
}

export default Blog