'use client';
import useGlobalStore from '@/store/global';
import clsx from 'clsx';
import styles from './styles.module.scss';
type LayoutProps = React.HTMLAttributes<HTMLDivElement>;
export default function Layout({ className, ...props }: LayoutProps) {
  const { theme } = useGlobalStore();
  return (
    <div
      data-theme={theme}
      {...props}
      className={clsx(styles['main-layout'], className)}
    />
  );
}
