import Avatar from '@/components/core/Avatar';
import Icon from '@/components/core/Icon';
import Nat from '@/components/UserDialog/Nat';
import Phone from '@/components/UserDialog/Phone';
import Row from './Row';
import styles from './styles.module.scss';
import useInternals from './useInternals';

export default function UserDialog() {
  const { user, ref, resetDialog, open, close } = useInternals();

  if (!open || !user) return null;

  return (
    <dialog ref={ref} onClose={resetDialog} className={styles['user-dialog']}>
      <header className={styles['user-dialog__header']}>
        <button
          autoFocus
          className={styles['user-dialog__close']}
          onClick={close}
        >
          <Icon name="close" width={32} />
        </button>

        <div className={styles['user-dialog__info']}>
          <Avatar
            src={user.picture.large}
            alt={user.fullName}
            className={styles['user-dialog__avatar']}
          />
          <div>
            <div className={styles['user-dialog__name']}>{user.fullName}</div>
            <div className={styles['user-dialog__email']}>{user.email}</div>
          </div>
        </div>
      </header>
      <ul className={styles['user-dialog__details']}>
        <Row icon="global">
          <Nat nationality={user.nat} />
        </Row>
        <Row icon="location">{user.fullAddress}</Row>
        <Row icon="phone">
          <Phone nationality={user.nat} number={user.phone} />
        </Row>
        <Row icon="mobile">
          <Phone nationality={user.nat} number={user.cell} />
        </Row>
      </ul>
    </dialog>
  );
}
