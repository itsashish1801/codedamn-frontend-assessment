export function convertToId(input: string) {
  return input.split(' ').join('').toLowerCase();
}

export function formatDate(input: string, format: 'short' | 'long' = 'short') {
  const date = new Date(input);
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();
  const day = date.getDay();

  return `${
    format === 'short' ? `${month} ${year}` : `${month} ${day}, ${year}`
  }`;
}
