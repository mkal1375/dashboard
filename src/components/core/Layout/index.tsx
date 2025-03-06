import clsx from 'clsx';
import styles from './styles.module.scss';
interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {}
export default function Layout({ className, ...props }: LayoutProps) {
  return <div {...props} className={clsx(styles['main-layout'], className)} />;
}
