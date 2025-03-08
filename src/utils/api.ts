import { db } from '@/db/db';
import { META_KEYS, schemeToMeta } from '@/db/meta';
import { userResponseSchema } from '@/types/user';
import { fetcher } from '@/utils/fetcher';
import { useState } from 'react';
import { ZodError } from 'zod';

export function getApiEndpoint(count = 10) {
  const params = new URLSearchParams({
    results: String(count),
    inc: 'name, gender, email, phone, cell, nat, picture, location, login',
    noinfo: '',
  });
  const url = new URL(`/api?${params.toString()}`, 'https://randomuser.me');

  return url.toString();
}

export function useFetchUsers() {
  const [fetching, setFetching] = useState(false);

  const fetch = async ({
    number,
    shouldChangeMeta = false,
    shouldFetch = true,
  }: {
    number: number;
    shouldChangeMeta?: boolean;
    shouldFetch: boolean;
  }) => {
    try {
      if (shouldFetch && !fetching) {
        setFetching(true);
        const res = await fetcher(getApiEndpoint(number), {
          schema: userResponseSchema,
        });

        await db.users.bulkAdd(res.results);
        if (shouldChangeMeta) {
          await db.meta.add(schemeToMeta(META_KEYS.HAS_FETCHED, true));
        }
        setFetching(false);
      }
    } catch (e) {
      setFetching(false);
      console.log(e);
      if (e instanceof ZodError) {
        console.error('There is a problem on structure of receiving data!');
      }
    }
  };

  return {
    fetch,
    fetching,
  };
}
