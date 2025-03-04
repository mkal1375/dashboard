import buttonStyles from '@/components/core/Button/variants';
import { VariantProps } from 'cva';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  loading?: boolean;
}

export default function Button(props: ButtonProps) {
  const { loading, variant, ...rest } = props;

  return <button className={buttonStyles({ loading, variant })} {...rest} />;
}
