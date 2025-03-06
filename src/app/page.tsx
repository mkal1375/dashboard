'use client';

import Filters from '@/components/Filters';
import { db } from '@/db/db';
import useGlobalStore from '@/store/global';
import { userResponseSchema } from '@/types/user';
import { getApiEndpoint } from '@/utils/api';
import { fetcher } from '@/utils/fetcher';
import { useLiveQuery } from 'dexie-react-hooks';
import { useEffect } from 'react';
import { ZodError } from 'zod';

export default function HomePage() {
  const { query, nationality } = useGlobalStore();
  const users = useLiveQuery(() => {
    const nat = nationality !== 'all';

    if (nat) {
      return db.users
        .where('nat')
        .equals(nationality)
        .filter((user) =>
          user.fullName.toLocaleLowerCase().includes(query.toLocaleLowerCase())
        )
        .toArray();
    } else {
      return db.users
        .filter((user) =>
          user.fullName.toLocaleLowerCase().includes(query.toLocaleLowerCase())
        )
        .toArray();
    }
  }, [nationality, query]);

  useEffect(() => {
    const fetch = async () => {
      try {
        if (users?.length === 0) {
          console.log('inside');
          const res = await fetcher(getApiEndpoint(10), {
            schema: userResponseSchema,
          });

          await db.users.bulkAdd(res.results);
        }
      } catch (e) {
        if (e instanceof ZodError) {
          console.log(e);
        }
      }
    };
    fetch();
  }, [users]);

  return (
    <div>
      <Filters />
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
}
