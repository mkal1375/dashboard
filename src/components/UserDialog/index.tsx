import Avatar from '@/components/core/Avatar';
import Nat from '@/components/UserDialog/Nat';
import Phone from '@/components/UserDialog/Phone';
import useGlobalStore from '@/store/global';
import { Icon } from '@iconify/react';
import { useEffect, useRef } from 'react';
import Row from './Row';
import styles from './styles.module.scss';

export default function UserDialog() {
  const {
    dialog: { user, open },
    resetDialog,
  } = useGlobalStore();
  const ref = useRef<HTMLDialogElement>(null);

  const close = () => {
    ref.current?.close();
  };

  useEffect(() => {
    if (open) {
      ref.current?.showModal();
    } else {
      close();
    }
  }, [open]);

  if (!open) return null;

  console.log(user);
  return (
    <dialog ref={ref} onClose={resetDialog} className={styles['user-dialog']}>
      <header className={styles['user-dialog__header']}>
        <button
          autoFocus
          className={styles['user-dialog__close']}
          onClick={close}
        >
          <Icon icon="solar:close-circle-bold" />
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
        <Row icon="solar:global-bold">
          <Nat nationality={user.nat} />
        </Row>
        <Row icon="solar:map-point-bold">{user.fullAddress}</Row>
        <Row icon="solar:phone-calling-rounded-bold">
          <Phone nationality={user.nat} number={user.phone} />
        </Row>
        <Row icon="solar:smartphone-2-bold">
          <Phone nationality={user.nat} number={user.cell} />
        </Row>
      </ul>
    </dialog>
  );
}
