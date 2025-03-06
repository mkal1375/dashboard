export function getApiEndpoint(count = 10) {
  const params = new URLSearchParams({
    results: String(count),
    inc: 'name, gender, email, phone, cell, nat, picture, location, login',
    noinfo: '',
  });
  const url = new URL(`/api?${params.toString()}`, 'https://randomuser.me');

  return url.toString();
}
