import { SearchInput } from '@/components/Filters/SearchInput';
import SelectCountry from '@/components/Filters/SelectCountry';
import useGlobalStore from '@/store/global';
import styles from './styles.module.scss';

export default function Filters() {
  const { query, setQuery } = useGlobalStore();

  return (
    <div className={styles.filters}>
      <SearchInput
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        placeholder="e.g. Ghazal Tizpa"
        autoFocus
      />
      <SelectCountry />
    </div>
  );
}
