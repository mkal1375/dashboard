import clsx from 'clsx';
import Image, { ImageProps } from 'next/image';
import styles from './styles.module.scss';

export type AvatarProps = ImageProps;

export default function Avatar({ className, alt, ...props }: AvatarProps) {
  return (
    <div className={clsx(styles.avatar, className)}>
      <Image
        fill
        {...props}
        sizes="(max-width: 768px) 100vw, 200px"
        alt={alt}
      />
    </div>
  );
}
