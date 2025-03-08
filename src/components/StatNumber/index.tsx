import styles from './styles.module.scss';
type StatNumberProps = { number: number; unit?: string };
export default function StatNumber({ number, unit }: StatNumberProps) {
  return (
    <div className={styles['stat-number']}>
      <div className={styles['stat-number__number']}>{number}</div>
      {unit && <div className={styles['stat-number__unit']}>{unit}</div>}
    </div>
  );
}
