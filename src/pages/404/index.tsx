import { Result, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function NotFound() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const backHome = () => {
    navigate('/', { replace: true });
  };
  return (
    <Result
      status="404"
      title="404"
      subTitle={t('notfound')}
      extra={
        <Button type="primary" onClick={backHome}>
          {t('back_home')}
        </Button>
      }
    />
  );
}
export default NotFound;
