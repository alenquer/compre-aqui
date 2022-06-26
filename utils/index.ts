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

export function validURL(str: string) {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  );
  return !!pattern.test(str);
}

export function AlphaNumWithoutSpace(str: string) {
  return str.replace(/[&\/\\#,=+()$~%.'";:[\]*?<>{}\s]/g, '');
}

export function AlphaNumWithSpace(str: string) {
  return str.replace(/[&\/\\#,+()=$~%.'";:[\]*?<>{}]/g, '');
}

export function limitCase(text: string, count: number) {
  return text.slice(0, count) + (text.length > count ? '...' : '');
}

export function sleep(ms: number): Promise<any> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function convertCurrency(
  mode: 'period' | 'comma',
  amount: string | number,
  prefix: string
) {
  const periodFormatted = String(amount)
    .replace('.', ',')
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

  const commaFormatted = String(amount).replace(
    /(\d)(?=(\d{3})+(?!\d))/g,
    '$1,'
  );

  switch (mode) {
    case 'period':
      return `${prefix} ${periodFormatted}`;
    case 'comma':
      return `${prefix} ${commaFormatted}`;
    default:
      return `${prefix} ${commaFormatted}`;
  }
}
