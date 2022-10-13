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
import TableRowsIcon from '@mui/icons-material/TableRows';
import CardTable from './cardtable'
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import LanIcon from '@mui/icons-material/Lan';
import Chart from '../chart'
import LinerChart from '../linerchart,';
// import {Divider} from '@mui/material';
import Divider from '@mui/material/Divider';
import DragDrop from '../fileuploader';


const { Header, Sider, Content } = Layout;

function SideMenu() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider trigger={null} className='mysidebar' collapsible collapsed={collapsed} width={!collapsed ? '150px' : '50px'} >
        <Header
          className="site-layout-background"
          style={{
            color: 'white',
            fontSize: 15,
            width: collapsed?'80px':'150px'
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => {
              setCollapsed(!collapsed)

            }
          })}
        </Header>


        <div className="logo" />
        <div className='sidemenuheader'>
          {!collapsed ? <TableRowsIcon className='headeroicon' /> : ""}
           { !collapsed ? 
           <h1 className='headerHeading'>Context</h1> : ""}
        </div>
           {!collapsed?<Divider className='divider'/>:""}
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <DashboardIcon />,
              label: 'DASHBOARD',
            },
            {
              key: '2',
              icon: <HomeIcon />,
              label: 'Home',
            },
            {
              key: '3',
              icon: <DonutSmallIcon />,
              label: 'Analytics',
            },
            {
              key: '4',
              icon: <TableRowsIcon />,
              label: 'Data',
            },
            {
              key: '5',
              icon: <DonutSmallIcon />,
              label: 'Flow Designer',
            },
            {
              key: '6',
              icon: <AutoGraphIcon />,
              label: 'Graphs',
            },
            {
              key: '7',
              icon: <AccountTreeIcon />,
              label: 'Project Alert',
            },
            {
              key: '8',
              icon: <FilterVintageIcon />,
              label: 'Project Activities',
            },
            {
              key: '9',
              icon: <LanIcon />,
              label: 'Project Workflow',
            },
            {
              key: '10',
              icon: <DonutSmallIcon />,
              label: 'Web Archieves',
            },
          ]}
        />


      </Sider>

      <Layout className="site-layout slidemobileview"  style={{marginLeft:!collapsed?'150px':'80px'}}>
        <PrimarySearchAppBar />
        <Content
          className="site-layout-background"
          style={{
            // margin: '24px 16px',
            padding: 10,
            minHeight: 280,
          }}
        >
          {/* <div> */}
            <DragDrop/>
          {/* </div> */}
          <Stack className='cards-div' direction={{ xs: 'column', sm: 'row' }}
            // spacing={{ xs: 1, sm: 2, md: 4 }}
            >
            <Card title='Number Of Files' content1='User Files' content2='Total Files' myclass='cards' />
            <Card title='Number of Insights' content1='Insights Generated' content2='Artifact Processed' myclass='cards' />
            <Card title='Times Saved' content1='Time Saved' content2='Time'myclass='cards' />
            <LinerChart style={{width:'40%'}}/>
            {/* <Card title='Recently Activities' myclass='cards'/> */}
          </Stack>
          <Stack className='cards-div' direction={{ xs: 'column', sm: 'row' }}
            // spacing={{ xs: 1, sm: 2, md: 4 }}
            >
            <CardTable title='Recent Files' heading1='Project' heading2='Time' />
            <CardTable title='Apps' heading1='Total Files' heading2='Last Uploaded' />
            {/* <CardTable title='Active Collaborators' /> */}
            <Chart />
          </Stack>
        </Content>
      </Layout>
    </Layout>
  );
};

export default SideMenu;
