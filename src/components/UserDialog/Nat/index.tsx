import Icon from '@/components/core/Icon';
import { Nationalities, nationalityCountryMap } from '@/types/user';
import styles from './styles.module.scss';
export default function Nat({ nationality }: { nationality: Nationalities }) {
  const nat = nationalityCountryMap[nationality];
  return (
    <div className={styles.nat}>
      <Icon name={nat.icon} />
      <div>{nat.name.toUpperCase()}</div>
    </div>
  );
}
