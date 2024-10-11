import { Link, Outlet } from 'umi';
import  './index.less';

import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
import './index.less'
import 'antd/dist/reset.css';
import { history } from 'umi';

import { MicroApp } from 'umi';


const { Header, Content, Sider } = Layout;

const items1: MenuProps['items'] = ['1', '2', '3'].map(key => ({
  key,
  label: `nav ${key}`,
}));

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `app${key}`,
      icon: React.createElement(icon),
      label: `app ${key}`,
   
      // children: new Array(4).fill(null).map((_, j) => {
      //   const subKey = index * 4 + j + 1;
      //   return {
      //     key: subKey,
      //     label: `option${subKey}`,
      //   };
      // }),
    };
  },
);

const App: React.FC = (props) => {
  console.log(props)
  return (
  <Layout style={{height:'100%'}}>
    <Header className="header">
      <div className="logo" style={{width:240,float:'left'}}>logo</div>
      {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} /> */}
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          onClick={({key,})=>{
            history.push(key)
            
          }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
          items={items2}
        />
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
     
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <div id="micro-app">

          <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  </Layout>
)};

export default App;