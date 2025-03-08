import { z } from 'zod';

// https://randomuser.me/documentation#nationalities

function getIconName(name: string) {
  return `circle-flags:${name}`;
}

export const nationalityCountryMap = {
  AU: {
    name: 'Australia',
    icon: getIconName('au'),
    code: '+61',
  },
  BR: {
    name: 'Brazil',
    icon: getIconName('br'),
    code: '+55',
  },
  CA: {
    name: 'Canada',
    icon: getIconName('ca'),
    code: '+1',
  },
  CH: {
    name: 'Switzerland',
    icon: getIconName('ch'),
    code: '+41',
  },
  DE: {
    name: 'Germany',
    icon: getIconName('de'),
    code: '+49',
  },
  DK: {
    name: 'Denmark',
    icon: getIconName('dk'),
    code: '+45',
  },
  ES: {
    name: 'Spain',
    icon: getIconName('es'),
    code: '+34',
  },
  FI: {
    name: 'Finland',
    icon: getIconName('fi'),
    code: '+358',
  },
  FR: {
    name: 'France',
    icon: getIconName('fr'),
    code: '+33',
  },
  GB: {
    name: 'Great Britain',
    icon: getIconName('gb'),
    code: '+44',
  },
  IE: {
    name: 'Ireland',
    icon: getIconName('ie'),
    code: '+353',
  },
  IN: {
    name: 'India',
    icon: getIconName('in'),
    code: '+91',
  },
  IR: {
    name: 'Iran',
    icon: getIconName('ir'),
    code: '+98',
  },
  MX: {
    name: 'Mexico',
    icon: getIconName('mx'),
    code: '+52',
  },
  NL: {
    name: 'Netherlands',
    icon: getIconName('nl'),
    code: '+31',
  },
  NO: {
    name: 'Norway',
    icon: getIconName('no'),
    code: '+47',
  },
  NZ: {
    name: 'New Zealand',
    icon: getIconName('nz'),
    code: '+64',
  },
  RS: {
    name: 'Serbia',
    icon: getIconName('rs'),
    code: '+381',
  },
  TR: {
    name: 'Turkey',
    icon: getIconName('tr'),
    code: '+90',
  },
  UA: {
    name: 'Ukraine',
    icon: getIconName('ua'),
    code: '+380',
  },
  US: {
    name: 'United States',
    icon: getIconName('us'),
    code: '+1',
  },
} as const;

export const nationalities = Object.keys(nationalityCountryMap);
export const nationalitySchema = z.enum(
  Object.keys(nationalityCountryMap) as [
    keyof typeof nationalityCountryMap,
    ...Array<keyof typeof nationalityCountryMap>,
  ]
);

export type Nationalities = z.infer<typeof nationalitySchema>;

export const userSchema = z
  .object({
    gender: z.string(),
    name: z.object({
      title: z.string(),
      first: z.string(),
      last: z.string(),
    }),
    login: z.object({
      uuid: z.string(),
      username: z.string(),
      password: z.string(),
      salt: z.string(),
      md5: z.string(),
      sha1: z.string(),
      sha256: z.string(),
    }),
    location: z.object({
      street: z.object({
        number: z.number(),
        name: z.string(),
      }),
      city: z.string(),
      state: z.string(),
      country: z.string(),
      postcode: z.union([z.string(), z.number()]),
      coordinates: z.object({
        latitude: z.string(),
        longitude: z.string(),
      }),
      timezone: z.object({
        offset: z.string(),
        description: z.string(),
      }),
    }),
    email: z.string().email(),
    phone: z.string(),
    cell: z.string(),
    picture: z.object({
      large: z.string().url(),
      medium: z.string().url(),
      thumbnail: z.string().url(),
    }),
    nat: nationalitySchema,
  })
  .transform((user) => ({
    id: user.login.uuid,
    fullName: `${user.name.first} ${user.name.last}`,
    fullAddress: `${user?.location?.street.number}, ${user?.location?.street.name}, ${user?.location?.city}, ${user?.location?.state}, ${user?.location?.country}`,
    ...user,
  }));

export type User = z.infer<typeof userSchema>;

export const userResponseSchema = z.object({ results: z.array(userSchema) });
export type UserAPIResponse = z.infer<typeof userResponseSchema>;
