import { Link, Outlet } from 'umi';
import styles from './index.less';
import routes from '../pages/routes';

export default function Layout() {
  return (
    <div className={styles.navs}>
      <Outlet />
    </div>
  );
}
