import Card from '@/components/core/Card';
import Icon, { Icons } from '@/components/core/Icon';
import clsx from 'clsx';
import styles from './styles.module.scss';

type StatCardProps = {
  title: string;
  icon: Icons;
  children: React.ReactNode;
  className?: string;
};
export default function StatCard({
  title,
  icon,
  className,
  children,
}: StatCardProps) {
  return (
    <Card className={clsx(styles['stat-card'], className)}>
      <header className={styles['stat-card__header']}>
        <Icon name={icon} />
        <div>{title}</div>
      </header>
      {children}
    </Card>
  );
}
