// this approach to loading icons is not the most efficient in terms of bundle size, but I chose it due to time constraints.
// however, the number of icons is small, and all of them will be used in the app.

import SolarHome from '~icons/solar/home-2-bold';
import SolarChart from '~icons/solar/chart-square-bold';
import SolarSettings from '~icons/solar/settings-bold';

type SvgProps = React.SVGProps<SVGSVGElement>;
export type UIconType = React.ForwardRefExoticComponent<SvgProps>;

const iconMap: Record<string, UIconType> = {
  'solar:home-2-bold': SolarHome,
  'solar:chart-square-bold': SolarChart,
  'solar:settings-bold': SolarSettings,
} as const;

export interface IconProps extends SvgProps {
  name: string;
}

function Icon(props: IconProps) {
  const { name, className } = props;

  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.error(`Icon "${name}" not found.`);
    return null;
  }

  return <IconComponent className={className} />;
}

export default Icon;
