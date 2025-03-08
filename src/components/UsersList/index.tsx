import Empty from '@/components/core/Empty';
import UserCard from '@/components/UserCard';
import useGlobalStore from '@/store/global';
import { User } from '@/types/user';
import styles from './styles.module.scss';

export default function UsersList({ users }: { users: User[] }) {
  const { openDialog } = useGlobalStore();

  if (users.length === 0) {
    return (
      <div className={styles['user-list-empty']}>
        <Empty className={styles['user-list-empty__illustration']} />
        <h2>Noting Found!</h2>
      </div>
    );
  }

  return (
    <div className={styles['user-list']}>
      {users.map((user) => (
        <UserCard user={user} key={user.id} onClick={() => openDialog(user)} />
      ))}
    </div>
  );
}
