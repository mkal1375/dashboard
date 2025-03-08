'use client';

import Loading from '@/components/core/Loading';
import Filters from '@/components/Filters';
import UserDialog from '@/components/UserDialog';
import UsersList from '@/components/UsersList';
import useUsers, { NOT_READY } from './useData';

export default function HomePage() {
  const { users, showLoading } = useUsers();

  if (showLoading || users === NOT_READY) {
    return <Loading />;
  }

  return (
    <div>
      <Filters />
      {<UsersList users={users} />}
      <UserDialog />
    </div>
  );
}
