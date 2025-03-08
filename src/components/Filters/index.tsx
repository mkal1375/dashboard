import { SearchInput } from '@/components/Filters/SearchInput';
import SelectCountry from '@/components/Filters/SelectCountry';
import useGlobalStore from '@/store/global';
import styles from './styles.module.scss';

import { useDebouncedCallback } from 'use-debounce';

import { useState } from 'react';

export default function Filters() {
  const { query, setQuery } = useGlobalStore();
  const [localQuery, setLocalQuery] = useState(query);

  const debouncedSetQuery = useDebouncedCallback(setQuery, 300);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalQuery(value);
    debouncedSetQuery(value);
  };

  return (
    <div className={styles.filters}>
      <SearchInput
        onChange={handleChange}
        value={localQuery}
        placeholder="e.g. Ghazal Tizpa"
        autoFocus
      />
      <SelectCountry />
    </div>
  );
}
