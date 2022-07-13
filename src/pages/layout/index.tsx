import React, { useState, Suspense, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useStore } from '@/store/index';
import { observer } from 'mobx-react-lite';
import { Layout, Drawer } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import SiderMenu from './sider/index';
import HeaderNav from './header/index';
const { Header, Content, Sider } = Layout;

function LayoutConfig() {
  const { configStore } = useStore();
  const navigate = useNavigate(); // 路由跳转
  const [collapsed, setCollapsed] = useState(false); // 菜单栏收起状态
  const [visible, setVisible] = useState(false); // Drawer状态
  const [width, setWidth] = useState(window.innerWidth); // 窗口宽度
  const toggle = () => {
    if (width > 650) setCollapsed(!collapsed);
    setVisible(true);
  };

  // 关闭drawer
  const onClose = () => {
    setVisible(false);
  };

  // 返回首页
  const backHome = () => {
    configStore.crumbItem();
    navigate('/', { replace: true });
  };

  // 获取窗口宽度
  window.onresize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    width < 650 ? setCollapsed(true) : setCollapsed(false);
  }, [width]);

  return (
    <Layout className="h-full select-none">
      {/* 侧边栏适配移动端 */}
      {width < 650 ? (
        <Drawer placement="left" width="80%" visible={visible} onClose={onClose} closable={false} bodyStyle={{ padding: 0 }}>
          <Sider width="100%" style={{ height: '100%' }} collapsedWidth={0} theme={configStore.themeStyle} trigger={null} className="cs-aside">
            <SiderMenu setVisible={setVisible} />
          </Sider>
        </Drawer>
      ) : (
        <Sider width="230" theme={configStore.themeStyle} trigger={null} collapsible collapsed={collapsed} className="cs-aside">
          <SiderMenu collapsed={collapsed} />
        </Sider>
      )}
      <Layout>
        <Header className="!bg-white shadow-box" style={{ display: 'flex', padding: 0, alignItems: 'center' }}>
          {width < 650 ? (
            <span className="w-24 text-5xl italic text-center text-red-300 cursor-pointer" onClick={backHome}>
              C
            </span>
          ) : (
            ''
          )}
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'flex items-center h-full py-0 px-6 cursor-pointer transition-color duration-300 text-gray-500 mr-2.5 hover:bg-gray-200',
            onClick: toggle,
          })}
          <HeaderNav width={width} />
        </Header>
        <Content
          className="bg-white shadow-box"
          style={{
            margin: width < 650 ? 4 : 10,
            padding: width < 650 ? 10 : 16,
            minHeight: 280,
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <Suspense>
            <Outlet />
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  );
}

export default observer(LayoutConfig);
