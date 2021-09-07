import { Layout } from 'antd';
import classNames from 'classnames';
import React, { ReactElement } from 'react';

interface LayoutPageProps {
  content: ReactElement,
  side: ReactElement,
  container: boolean,
  customClass: string
}

const LayoutPage = ({ content, side, customClass, container }: LayoutPageProps) => (
  <div className={classNames(`${customClass}`, { container: !!container })}>
    <Layout className="layout">
      <Layout.Content className="content">{content}</Layout.Content>
      <Layout.Sider className="sidebar" theme="light" width={400}>
        {side}
      </Layout.Sider>
    </Layout>
  </div>
);

export default LayoutPage;
