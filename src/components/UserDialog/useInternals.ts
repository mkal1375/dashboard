import useGlobalStore from '@/store/global';
import { useEffect, useRef } from 'react';

export default function useInternals() {
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

  return {
    resetDialog,
    ref,
    user,
    open,
    close,
  };
}
