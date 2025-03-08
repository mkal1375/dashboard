import Avatar from '@/components/core/Avatar';
import Card from '@/components/core/Card';
import Icon from '@/components/core/Icon';
import { nationalityCountryMap, User } from '@/types/user';
import styles from './styles.module.scss';

export default function UserCard({
  user,
  onClick = () => {},
}: {
  user: User;
  onClick?: () => void;
}) {
  return (
    <Card className={styles['user-card']} onClick={onClick} as="button">
      <div className={styles['user-card__avatar_wrapper']}>
        <Avatar
          src={user.picture.large}
          alt={user.fullName}
          className={styles['user-card__avatar']}
        />
        <Icon
          name={nationalityCountryMap[user.nat].icon}
          className={styles['user-card__country']}
        />
      </div>
      <div className={styles['user-card__info']}>
        <div className={styles['user-card__name']}>{user.fullName}</div>
        <div className={styles['user-card__email']}>{user.email}</div>
      </div>
    </Card>
  );
}
