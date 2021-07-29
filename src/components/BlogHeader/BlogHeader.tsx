import React from 'react';
import { Typography, PageHeader } from 'antd';
import './BlogHeader.css'

const { Title } = Typography;

type Props = {
   title: string,
   subtitle: string
}
const BlogHeader = ({ title, subtitle }: Props) => {
   return (
      <PageHeader
         className="blog-header">
         <Title
            level={1}
            className="blog-header__title">{title}</Title>
         <Title
            level={3}
            type="secondary"
            className="blog-header__subtitle">{subtitle}</Title>
      </PageHeader>


   )
}

export default BlogHeader;