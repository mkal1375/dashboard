'use client';
import useData from '@/app/stats/useData';
import styles from './styles.module.scss';

import Chart from '@/components/Chart';
import StatCard from '@/components/StatCard';
import StatNumber from '@/components/StatNumber';

export default function StatsPage() {
  const { countriesCount, storage, data, users } = useData();

  return (
    <div className={styles.stats}>
      <StatCard icon="global" title="Countries">
        <StatNumber number={countriesCount} />
      </StatCard>
      <StatCard icon="users" title="Users">
        <StatNumber number={users?.length ?? 0} />
      </StatCard>
      <StatCard icon="database" title="Storage">
        <StatNumber number={storage} unit="KB" />
      </StatCard>
      <Chart data={data} />
    </div>
  );
}
