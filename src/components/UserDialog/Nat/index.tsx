import { Nationalities, nationalityCountryMap } from '@/types/user';
import { Icon } from '@iconify/react';
import styles from './styles.module.scss';
export default function Nat({ nationality }: { nationality: Nationalities }) {
  const nat = nationalityCountryMap[nationality];
  return (
    <div className={styles.nat}>
      <Icon icon={nat.icon} />
      <div>{nat.name.toUpperCase()}</div>
    </div>
  );
}
