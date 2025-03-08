import { Meta } from '@/db/meta';
import { User } from '@/types/user';
import Dexie, { type EntityTable } from 'dexie';

const db = new Dexie('UsersDatabase') as Dexie & {
  users: EntityTable<User, 'id'>;
  meta: EntityTable<Meta, 'key'>;
};

db.version(1).stores({
  users: '++id, nat, fullName',
  meta: '++key',
});

export { db };
