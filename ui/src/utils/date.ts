import { format as dateFormatter } from 'date-fns';

export function formatDate(date: number | string | Date, format: string) {
  const normalizeDate = typeof date === 'string' ? new Date(date) : date;
  return dateFormatter(normalizeDate, format);
}

export function formatChatDate(date: string | Date) {}
