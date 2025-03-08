'use client';
import Icon from '@/components/core/Icon';
import { cva, VariantProps } from 'cva';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { items } from './constants';
import styles from './styles.module.scss';

export default function Menu() {
  const path = usePathname();
  return (
    <div className={styles['menu-container']}>
      <nav className={styles.menu}>
        {items.map((item) => (
          <MenuItem item={item} key={item.path} active={path === item.path} />
        ))}
      </nav>
    </div>
  );
}

const menuItemStyles = cva({
  base: styles['menu-item'],
  variants: {
    active: {
      true: styles['menu-item--active'],
    },
  },
});

type MenuItemProps = {
  item: (typeof items)[number];
} & VariantProps<typeof menuItemStyles>;

function MenuItem({ item, active }: MenuItemProps) {
  return (
    <Link className={menuItemStyles({ active })} href={item.path}>
      <Icon name={item.icon} width={32} />
      {active && <span>{item.title}</span>}
    </Link>
  );
}
