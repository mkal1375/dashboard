import { Nationalities, nationalityCountryMap } from '@/types/user';

export default function Phone({
  nationality,
  number,
}: {
  nationality: Nationalities;
  number: string;
}) {
  const nat = nationalityCountryMap[nationality];
  return (
    <div>
      {nat.code} {number}
    </div>
  );
}
