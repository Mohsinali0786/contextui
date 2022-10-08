import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import Card from './card';
import { Stack } from '@mui/material';
import 'antd/dist/antd.css'
import PrimarySearchAppBar from './header'


const { Header, Sider, Content } = Layout;

function SideMenu() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
      
            <Header
              className="site-layout-background"
              style={{
                color:'white',
                fontSize:25
              }}
            >
              {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed),
              })}
            </Header>
        <h1 style={{color:'white'}}>HHHHH</h1>


        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
          />
      </Sider>
      <Layout className="site-layout">
        <PrimarySearchAppBar/>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
          >
          <Stack className='cards-div' direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}>
            <Card />
            <Card />
            <Card />
            <Card />
          </Stack>
          <Stack className='cards-div' direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}>
            <Card />
            <Card />
            <Card />
          </Stack>
        </Content>
      </Layout>
    </Layout>
  );
};

export default SideMenu;
