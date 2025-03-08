import clsx from 'clsx';
import styles from './styles.module.scss';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

export default function Card({
  as: Component = 'div',
  className,
  ...props
}: CardProps) {
  return <Component {...props} className={clsx(styles.card, className)} />;
}
