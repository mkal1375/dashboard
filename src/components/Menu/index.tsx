'use client';
import styles from './styles.module.scss';
import { items } from './constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cva, VariantProps } from 'cva';
import { Icon } from '@iconify/react';

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
      <Icon icon={item.icon} width={32} />
      {active && <span>{item.title}</span>}
    </Link>
  );
}
