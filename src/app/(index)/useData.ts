import { db } from '@/db/db';
import { META_KEYS } from '@/db/meta';
import useGlobalStore from '@/store/global';
import { useFetchUsers } from '@/utils/api';
import { useLiveQuery } from 'dexie-react-hooks';
import { useEffect } from 'react';

export const NOT_READY = 'not-ready' as const;
export default function useUsers() {
  const { fetch, fetching } = useFetchUsers();
  const { query, nationality } = useGlobalStore();
  const init = useLiveQuery(
    () => {
      return db.meta.where('key').equals(META_KEYS.HAS_FETCHED).first();
    },
    [],
    NOT_READY
  );

  const users = useLiveQuery(
    () => {
      const nat = nationality !== 'all';

      if (nat) {
        return db.users
          .where('nat')
          .equals(nationality)
          .filter((user) =>
            user.fullName
              .toLocaleLowerCase()
              .includes(query.toLocaleLowerCase())
          )
          .toArray();
      } else {
        return db.users
          .filter((user) =>
            user.fullName
              .toLocaleLowerCase()
              .includes(query.toLocaleLowerCase())
          )
          .toArray();
      }
    },
    [nationality, query],
    NOT_READY
  );

  useEffect(() => {
    fetch({
      number: 10,
      shouldFetch: init !== 'not-ready' && !init,
      shouldChangeMeta: true,
    });
  }, [users, init, fetching]);

  return { users, showLoading: users === NOT_READY || fetching };
}
