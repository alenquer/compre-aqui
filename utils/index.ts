export function currentPage({
  page,
  perPage,
  data,
}: {
  page: number;
  perPage: number;
  data: any[];
}) {
  let _start = (page - 1) * perPage;
  let _end = _start + perPage;

  return data.slice(_start, _end);
}

export function isImage(url: string) {
  return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
}

export function limitCase(text: string, count: number) {
  return text.slice(0, count) + (text.length > count ? '...' : '');
}
