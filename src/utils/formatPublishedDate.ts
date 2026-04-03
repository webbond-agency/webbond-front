const UK_UA: Intl.DateTimeFormatOptions = {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
};

/** Парсинг рядка дати Sanity / ISO; `null`, якщо не валідна. */
export function parsePublishedDate(value: string): Date | null {
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? null : d;
}

/** Формат ДД.MM.РРРР (uk-UA). Якщо дата невалідна — повертає вихідний рядок. */
export function formatPublishedDate(value: string): string {
  const d = parsePublishedDate(value);
  if (!d) return value;
  return d.toLocaleDateString("uk-UA", UK_UA);
}
