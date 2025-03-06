import { z } from 'zod';

// https://randomuser.me/documentation#nationalities

function getIconName(name: string) {
  return `circle-flags:${name}`;
}

export const nationalityCountryMap = {
  AU: {
    name: 'Australia',
    icon: getIconName('au'),
  },
  BR: {
    name: 'Brazil',
    icon: getIconName('br'),
  },
  CA: {
    name: 'Canada',
    icon: getIconName('ca'),
  },
  CH: {
    name: 'China',
    icon: getIconName('ch'),
  },
  DE: {
    name: 'Germany',
    icon: getIconName('de'),
  },
  DK: {
    name: 'Switzerland',
    icon: getIconName('dk'),
  },
  ES: {
    name: 'Spain',
    icon: getIconName('es'),
  },
  FI: {
    name: 'Finland',
    icon: getIconName('fi'),
  },
  FR: {
    name: 'France',
    icon: getIconName('fr'),
  },
  GB: {
    name: 'Great Britain',
    icon: getIconName('gb'),
  },
  IE: {
    name: 'Ireland',
    icon: getIconName('ie'),
  },
  IN: {
    name: 'India',
    icon: getIconName('in'),
  },
  IR: {
    name: 'Iran',
    icon: getIconName('ir'),
  },
  MX: {
    name: 'Mexico',
    icon: getIconName('mx'),
  },
  NL: {
    name: 'Netherlands',
    icon: getIconName('nl'),
  },
  NO: {
    name: 'Norway',
    icon: getIconName('no'),
  },
  NZ: {
    name: 'New Zealand',
    icon: getIconName('nz'),
  },
  RS: {
    name: 'Serbia',
    icon: getIconName('rs'),
  },
  TR: {
    name: 'Turkey',
    icon: getIconName('tr'),
  },
  UA: {
    name: 'Ukraine',
    icon: getIconName('ua'),
  },
  US: {
    name: 'United States',
    icon: getIconName('us'),
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
    ...user,
  }));

export type User = z.infer<typeof userSchema>;

export const userResponseSchema = z.object({ results: z.array(userSchema) });
export type UserAPIResponse = z.infer<typeof userResponseSchema>;
