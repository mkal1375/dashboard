import styles from './styles.module.scss';
import { cva } from 'cva';

const buttonStyles = cva({
  base: styles.button,
  variants: {
    variant: {
      primary: styles['button--primary'],
      outline: styles['button--outline'],
      ghost: styles['button--ghost'],
    },
    full: {
      true: styles['button--full'],
    },
    size: {
      sm: styles['button--sm'],
    },
    loading: {
      true: styles.buttonLoading,
    },
  },
});

export default buttonStyles;
