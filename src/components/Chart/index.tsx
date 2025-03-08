import StatCard from '@/components/StatCard';
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  YAxis,
} from 'recharts';
import styles from './styles.module.scss';

interface DataItem {
  name: string;
  value: number;
}

export default function Chart({ data }: { data: DataItem[] }) {
  return (
    <StatCard
      icon="solar:global-bold"
      title="Nationality Distribution"
      className={styles['stat-card-chart']}
    >
      <div>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <YAxis dataKey="value" />
            <Tooltip />
            <Bar dataKey="value" fill="var(--color-primary)">
              <LabelList
                dataKey="name"
                position="centerTop"
                angle={90}
                fontSize={14}
                fill="white"
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </StatCard>
  );
}
