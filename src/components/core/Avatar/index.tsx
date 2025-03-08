import clsx from 'clsx';
import Image, { ImageProps } from 'next/image';
import styles from './styles.module.scss';

export interface AvatarProps extends ImageProps {}

export default function Avatar({ className, ...props }: AvatarProps) {
  return (
    <div className={clsx(styles.avatar, className)}>
      <Image fill {...props} />
    </div>
  );
}
