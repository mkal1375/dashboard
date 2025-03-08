import { cva } from 'cva';
import styles from './styles.module.scss';

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
      true: styles['button--loading'],
    },
  },
});

export default buttonStyles;
