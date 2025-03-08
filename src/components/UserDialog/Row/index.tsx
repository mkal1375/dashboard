import Icon, { Icons } from '@/components/core/Icon';
import styles from './styles.module.scss';
export default function Row({
  icon,
  children,
}: {
  icon: Icons;
  children: React.ReactNode;
}) {
  return (
    <li className={styles.row}>
      <Icon name={icon} className={styles['row__icon']} />
      <div className={styles['row__children']}>{children}</div>
    </li>
  );
}
