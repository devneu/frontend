import { Layout } from 'antd';
import cn from 'classnames';
import React, { ReactElement } from 'react';

interface LayoutPageProps {
  content: ReactElement;
  side: ReactElement;
  container?: boolean;
  className?: string;
}

const LayoutPage = ({ content, side, className, container }: LayoutPageProps) => (
  <div className={cn(className, { container })}>
    <Layout className="layout">
      <Layout.Content className="content">{content}</Layout.Content>
      <Layout.Sider className="sidebar" theme="light" width={400}>
        {side}
      </Layout.Sider>
    </Layout>
  </div>
);

export default LayoutPage;
