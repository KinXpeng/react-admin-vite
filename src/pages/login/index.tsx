import { useState } from 'react';
import { Form, Input, Button, Checkbox, Spin } from 'antd'; // message
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useStore } from '@/store/index';
import { observer } from 'mobx-react-lite';

function Login() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { basicStore, configStore } = useStore();
  const [loading, setLoading] = useState(false);
  // 登录
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
    basicStore.login();
    // message.success(t('login.success'));
    setLoading(true);
    setTimeout(() => {
      navigate('/', { replace: true });
      configStore.crumbItem();
      setLoading(false);
    }, 1000);
  };
  return (
    <div className="w-full h-full pt-60">
      <Spin spinning={loading}>
        <Form
          name="normal_login"
          className="max-w-xs !m-auto"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: t('login.username_check'),
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder={t('login.username')} />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: t('login.password_check'),
              },
            ]}
          >
            <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder={t('login.password')} />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>{t('login.remember')}</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              {t('login.login')}
            </Button>
          </Form.Item>
        </Form>
      </Spin>
    </div>
  );
}
export default observer(Login);
