import { db } from '@/db/db';
import { Nationalities, nationalityCountryMap } from '@/types/user';
import { useLiveQuery } from 'dexie-react-hooks';
import { useMemo } from 'react';

function getObjectSize(obj: object): number {
  // The Storage Management API is not accessible in non-secure contexts (HTTP),this is for demonstration purposes only.
  return Math.ceil(new TextEncoder().encode(JSON.stringify(obj)).length / 1024);
}
export default function useData() {
  const users = useLiveQuery(() => db.users.toArray());
  const countries = useMemo(() => {
    if (!users) return {};

    return users.reduce(
      (prev, item) => {
        if (prev[item.nat]) {
          prev[item.nat] += 1;
        } else {
          prev[item.nat] = 1;
        }

        return prev;
      },
      {} as Record<Nationalities, number>
    );
  }, [users]);

  const storage = useMemo(() => {
    if (!users) return 0;

    return getObjectSize(users);
  }, [users]);

  const countriesCount = Object.keys(countries).length;

  const data = useMemo(() => {
    return Object.entries(countries).map(([key, value]) => {
      return {
        name: nationalityCountryMap[key as Nationalities].name,
        value: value as number,
      };
    });
  }, [countries]);

  return {
    countriesCount,
    users,
    data,
    storage,
  };
}
