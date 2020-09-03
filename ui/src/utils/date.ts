import { format as dateFormatter, formatDistance } from 'date-fns';

export function formatDate(date: number | string | Date, format: string) {
  const normalizeDate = typeof date === 'string' ? new Date(date) : date;
  return dateFormatter(normalizeDate, format);
}

export function formatChatDate(date: number | string | Date) {
  const normalizeDate = typeof date === 'string' ? new Date(date) : date;
  return formatDistance(normalizeDate, new Date());
}
