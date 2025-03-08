import { Icon } from '@iconify/react';
import styles from './styles.module.scss';
export default function Row({
  icon,
  children,
}: {
  icon: string;
  children: React.ReactNode;
}) {
  return (
    <li className={styles.row}>
      <Icon icon={icon} className={styles['row__icon']} />
      <div className={styles['row__children']}>{children}</div>
    </li>
  );
}
