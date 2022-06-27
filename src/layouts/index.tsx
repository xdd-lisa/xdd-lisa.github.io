import React, { useState } from 'react';
import { Outlet, Link } from 'umi';
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import routes from '@page/routes';

const { Header, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

type RouteItem = {
  exact?: boolean,
  path: string,
  component: string,
  name: string,
};

export default function Layouts() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className="site-layout-background" style={{ padding: '0 0 0 20px', color: '#fff' }}>
        welcome to you
      </Header>
      <Layout className="site-layout">
        <Sider theme="light" collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
          <div className="logo" />
          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
            {
              routes?.map((item: RouteItem, index: number) => (
              <Menu.Item key={index}><Link to={item.path}>{item.name}</Link></Menu.Item>))
            }
          </Menu>
        </Sider>
        <Content style={{ margin: 12, background: '#fff' }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
