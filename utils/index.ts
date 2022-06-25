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
