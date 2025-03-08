import useGlobalStore, { NationalityInput } from '@/store/global';
import { nationalityCountryMap } from '@/types/user';
import { Icon } from '@iconify/react';
import * as Select from '@radix-ui/react-select';
import * as React from 'react';
import styles from './styles.module.scss';

function SelectCountry() {
  const { setNationality, nationality } = useGlobalStore();

  return (
    <Select.Root
      onValueChange={(value) => setNationality(value as NationalityInput)}
      defaultValue="all"
      value={nationality}
    >
      <Select.Trigger
        className={styles['select-trigger']}
        aria-label="Countries"
      >
        <Select.Value placeholder="Select a Country…" />
        <Icon icon="solar:alt-arrow-down-bold" />
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className={styles['select-content']}>
          <SelectItem
            value="all"
            item={{ name: 'World', icon: 'circle-flags:un' }}
          />
          <Select.ScrollUpButton className={styles['select-arrow']}>
            <Icon icon="solar:alt-arrow-up-bold" />
          </Select.ScrollUpButton>
          <Select.Viewport>
            <Select.Group>
              {Object.entries(nationalityCountryMap).map(([key, value]) => (
                <SelectItem
                  item={value}
                  key={key}
                  value={key as NationalityInput}
                />
              ))}
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className={styles['select-arrow']}>
            <Icon icon="solar:alt-arrow-down-bold" />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}

function _SelectItem(
  {
    value,
    item,
    ...props
  }: {
    className?: string;
    item: { name: string; icon: string };
    value: NationalityInput;
  },
  forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <Select.Item
      {...props}
      value={value}
      ref={forwardedRef}
      className={styles['select-item']}
    >
      <Select.ItemText asChild>
        <span className={styles['select-item__inner']}>
          <Icon icon={item.icon} />
          <span>{item.name}</span>
        </span>
      </Select.ItemText>
      <Select.ItemIndicator>
        <Icon icon="solar:check-circle-bold" />
      </Select.ItemIndicator>
    </Select.Item>
  );
}

const SelectItem = React.forwardRef(_SelectItem);
export default SelectCountry;
