import { Icon } from '@iconify/react';
import { useRef } from 'react';
import styles from './styles.module.scss';
export interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {}
export function SearchInput(props: TextInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className={styles['search-input']} onClick={handleClick}>
      <Icon icon="solar:minimalistic-magnifer-linear" width={24} />
      <input
        {...props}
        ref={inputRef}
        type="text"
        className={styles['search-input__input']}
      />
    </div>
  );
}
