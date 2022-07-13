import { useEffect, useState } from 'react';
import { useStore } from '@/store/index';
import { observer } from 'mobx-react-lite';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import { PicRightOutlined, TableOutlined, SmileOutlined } from '@ant-design/icons';

interface IHeaderProps {
  collapsed?: boolean;
  setVisible?: any;
}

function SiderMenu({ collapsed, setVisible }: IHeaderProps) {
  const { configStore } = useStore();
  const { t } = useTranslation();
  const navigate = useNavigate(); // 路由跳转
  const location = useLocation();
  const [menuList] = useState([
    // 菜单列表
    {
      key: 'manage',
      icon: <PicRightOutlined />,
      label: t('aside.manage.nav'),
      children: [
        {
          path: '/analysisPanel',
          key: 'analysisPanel',
          label: t('aside.manage.analysis_panel'),
          onClick: () => navigate('/analysisPanel'),
        },
        {
          path: '/userList',
          key: 'userList',
          label: t('aside.manage.user_list'),
          onClick: () => navigate('/userList'),
        },
      ],
    },
    {
      key: 'diary',
      icon: <TableOutlined />,
      label: t('aside.diary.nav'),
      children: [
        {
          path: '/diaryList',
          key: 'diaryList',
          label: t('aside.diary.diary_list'),
          onClick: () => navigate('/diaryList'),
        },
        {
          path: '/journeyTake',
          key: 'journeyTake',
          label: t('aside.diary.journey_take'),
          onClick: () => navigate('/journeyTake'),
        },
      ],
    },
    {
      key: 'moment',
      icon: <SmileOutlined />,
      label: t('aside.moment.nav'),
      children: [
        {
          path: '/momentStatus',
          key: 'momentStatus',
          label: t('aside.moment.moment_status'),
          onClick: () => navigate('/momentStatus'),
        },
      ],
    },
  ]);

  // 解决刷新页面面包屑导航消失的问题
  useEffect(() => {
    let activeNode = JSON.parse(localStorage.getItem('activeItem') || '{}');
    let parentNode = JSON.parse(localStorage.getItem('parentItem') || '{}');
    if (parentNode) parentNode = menuList.find((item) => item.key === parentNode.key);
    menuList.forEach((ele) => {
      let result = ele.children.find((item) => item.path === location.pathname);
      if (result) {
        activeNode = result;
      }
    });
    if (activeNode?.label !== undefined && activeNode?.label !== null && location.pathname !== '/') {
      configStore.switchMenuItem(activeNode);
      configStore.operateCrumbMenu(parentNode);
    }
  }, [configStore, location.pathname, menuList]);

  // 返回首页
  const backHome = () => {
    configStore.crumbItem();
    navigate('/', { replace: true });
  };

  // 点击菜单
  const handleClickItem: MenuProps['onClick'] = (item) => {
    let parentNode = item.keyPath[1];
    let result = menuList.find((ele) => ele.key === parentNode);
    let activeNode = result?.children.find((ele) => ele.key === item.key);
    configStore.operateCrumbMenu(result);
    configStore.switchMenuItem(activeNode);
    if (setVisible !== undefined) setVisible(false); // 收起drawer菜单
  };

  return (
    <>
      <div className="h-16 text-center text-6xl italic cursor-pointer text-blue-400" onClick={backHome}>
        {collapsed ? 'C' : 'CINS'}
      </div>
      <Menu theme={configStore.themeStyle} mode="inline" selectedKeys={[configStore.activeItem.key]} onClick={handleClickItem} items={menuList}></Menu>
    </>
  );
}

export default observer(SiderMenu);
