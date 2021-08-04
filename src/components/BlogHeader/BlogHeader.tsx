import React from 'react';
import { Typography, PageHeader } from 'antd';
import './BlogHeader.scss'

const { Title } = Typography;

interface BlogHeaderProps {
   title: string,
   subtitle: string
}
const BlogHeader = ({ title, subtitle }: BlogHeaderProps) => {
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