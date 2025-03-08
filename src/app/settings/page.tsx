'use client';
import styles from './styles.module.scss';

import useGlobalStore, { themes } from '@/store/global';

export default function SettingsPage() {
  const { theme, setTheme } = useGlobalStore();
  return (
    <div className={styles['settings-page']}>
      <div>
        theme:{' '}
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          {themes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
