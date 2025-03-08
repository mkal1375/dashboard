'use client';
import Button from '@/components/core/Button';
import styles from './styles.module.scss';

import useDeleteDB from '@/app/settings/useInternals';
import useGlobalStore, { type Themes, themes } from '@/store/global';
import { useFetchUsers } from '@/utils/api';

export default function SettingsPage() {
  const { theme, setTheme } = useGlobalStore();
  const { fetch, fetching } = useFetchUsers();
  const { deleteDB, deleting } = useDeleteDB();

  return (
    <div className={styles['settings-page']}>
      <div>
        theme:{' '}
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value as Themes)}
        >
          {themes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <Button
          variant="primary"
          loading={fetching}
          onClick={() => fetch({ shouldFetch: true, number: 10 })}
        >
          Add More Random Users
        </Button>
      </div>
      <div>
        <Button variant="outline" loading={deleting} onClick={deleteDB}>
          Delete Whole Database
        </Button>
      </div>
    </div>
  );
}
