// this approach to loading icons is not the most efficient in terms of bundle size, but I chose it due to time constraints.
// however, the number of icons is small, and all of them will be used in the app.

import FlagAu from '~icons/circle-flags/au';
import FlagBr from '~icons/circle-flags/br';
import FlagCa from '~icons/circle-flags/ca';
import FlagCh from '~icons/circle-flags/ch';
import FlagDe from '~icons/circle-flags/de';
import FlagDk from '~icons/circle-flags/dk';
import FlagEs from '~icons/circle-flags/es';
import FlagFi from '~icons/circle-flags/fi';
import FlagFr from '~icons/circle-flags/fr';
import FlagGb from '~icons/circle-flags/gb';
import FlagIe from '~icons/circle-flags/ie';
import FlagIn from '~icons/circle-flags/in';
import FlagIr from '~icons/circle-flags/ir';
import FlagMx from '~icons/circle-flags/mx';
import FlagNl from '~icons/circle-flags/nl';
import FlagNo from '~icons/circle-flags/no';
import FlagNz from '~icons/circle-flags/nz';
import FlagRs from '~icons/circle-flags/rs';
import FlagTr from '~icons/circle-flags/tr';
import FlagUa from '~icons/circle-flags/ua';
import FlagUn from '~icons/circle-flags/un';
import FlagUs from '~icons/circle-flags/us';
import SolarChevronDown from '~icons/solar/alt-arrow-down-bold';
import SolarChevronUp from '~icons/solar/alt-arrow-up-bold';
import SolarChart from '~icons/solar/chart-square-bold';
import SolarCheck from '~icons/solar/check-circle-bold';
import SolarClose from '~icons/solar/close-circle-bold';
import SolarDatabase from '~icons/solar/database-bold';
import SolarGlobal from '~icons/solar/global-bold';
import SolarHome from '~icons/solar/home-2-bold';
import SolarLocation from '~icons/solar/map-point-bold';
import SolarMagnifier from '~icons/solar/minimalistic-magnifer-linear';
import SolarPhone from '~icons/solar/phone-calling-rounded-bold';
import SolarSettings from '~icons/solar/settings-bold';
import SolarMobile from '~icons/solar/smartphone-2-bold';
import SolarUsers from '~icons/solar/users-group-rounded-bold';

type SvgProps = React.SVGProps<SVGSVGElement>;
export type UIconType = React.ForwardRefExoticComponent<SvgProps>;

const iconMap = {
  home: SolarHome,
  chart: SolarChart,
  settings: SolarSettings,
  magnifier: SolarMagnifier,
  'chevron-down': SolarChevronDown,
  'chevron-up': SolarChevronUp,
  check: SolarCheck,
  close: SolarClose,
  global: SolarGlobal,
  location: SolarLocation,
  phone: SolarPhone,
  mobile: SolarMobile,
  database: SolarDatabase,
  users: SolarUsers,
  'flag-au': FlagAu,
  'flag-br': FlagBr,
  'flag-ca': FlagCa,
  'flag-ch': FlagCh,
  'flag-de': FlagDe,
  'flag-dk': FlagDk,
  'flag-es': FlagEs,
  'flag-fi': FlagFi,
  'flag-fr': FlagFr,
  'flag-gb': FlagGb,
  'flag-ie': FlagIe,
  'flag-in': FlagIn,
  'flag-ir': FlagIr,
  'flag-mx': FlagMx,
  'flag-nl': FlagNl,
  'flag-no': FlagNo,
  'flag-nz': FlagNz,
  'flag-rs': FlagRs,
  'flag-tr': FlagTr,
  'flag-ua': FlagUa,
  'flag-us': FlagUs,
  'flag-un': FlagUn,
} as const;

export type Icons = keyof typeof iconMap;

export interface IconProps extends SvgProps {
  name: Icons;
}

function Icon({ name, ...props }: IconProps) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.error(`Icon "${name}" not found.`);
    return null;
  }

  return <IconComponent {...props} height={props.width} />;
}

export default Icon;
