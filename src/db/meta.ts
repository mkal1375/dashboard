export const META_KEYS = {
  HAS_FETCHED: 'HAS_FETCHED',
} as const;

export type Meta = { key: keyof typeof META_KEYS; value: string };

export function schemeToMeta(
  key: keyof typeof META_KEYS,
  value: object | boolean
) {
  return { key, value: JSON.stringify(value) };
}

export function schemeFromMeta(meta: Meta) {
  return { key: meta.key, value: JSON.parse(meta.value) };
}
