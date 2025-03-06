import { SearchInput } from '@/components/Filters/SearchInput';
import useGlobalStore, { type NationalityInput } from '@/store/global';
import { nationalities, nationalityCountryMap } from '@/types/user';
import styles from './styles.module.scss';

export default function Filters() {
  const { query, setQuery, nationality, setNationality } = useGlobalStore();
  return (
    <div className={styles.filters}>
      <SearchInput
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        placeholder="e.g. Ghazal Tizpa"
        autoFocus
      />
      <select
        onChange={(e) => setNationality(e.target.value as NationalityInput)}
        value={nationality}
      >
        <option value="">all</option>
        {nationalities.map((o) => (
          <option key={o} value={o}>
            {nationalityCountryMap[o].name}
          </option>
        ))}
      </select>
    </div>
  );
}
