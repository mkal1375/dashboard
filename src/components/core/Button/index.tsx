import buttonStyles from '@/components/core/Button/variants';
import clsx from 'clsx';
import { VariantProps } from 'cva';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  loading?: boolean;
}

export default function Button({ className, ...props }: ButtonProps) {
  const { loading, variant, size, ...rest } = props;

  return (
    <button
      className={clsx(buttonStyles({ loading, variant, size }), className)}
      {...rest}
    />
  );
}
