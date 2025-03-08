import Icon from '@/components/core/Icon';
import { useRef } from 'react';
import styles from './styles.module.scss';
export type TextInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type'
>;
export function SearchInput(props: TextInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className={styles['search-input']} onClick={handleClick}>
      <Icon name="magnifier" width={24} />
      <input
        {...props}
        ref={inputRef}
        type="text"
        className={styles['search-input__input']}
      />
    </div>
  );
}
