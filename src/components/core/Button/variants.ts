import styles from './styles.module.scss';
import { cva } from 'cva';

console.log(styles);

const buttonStyles = cva({
  base: styles.button,
  variants: {
    variant: {
      primary: styles['button--primary'],
      outline: styles['button--outline'],
      ghost: styles['button--ghost'],
    },
    loading: {
      true: styles.buttonLoading,
    },
  },
});

export default buttonStyles;
