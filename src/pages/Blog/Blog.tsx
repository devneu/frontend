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
            defaultCurrentPage={5}
            totalItems={51}
            currentPage={1.2}
            pageSize={10} />
      </>
   )
}

export default Blog