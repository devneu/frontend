import Layout, { Content } from 'antd/lib/layout/layout';
import BlogHeader from '../../components/BlogHeader';
import './Blog.scss';

const Blog = () => {
   return (
      <>
         <BlogHeader
            title="Post Title"
            subtitle="Post Subtitle" />
      </>
   )
}

export default Blog