import { format, register } from 'timeago.js';
import { TDate } from 'timeago.js/lib/interface';
import ko from 'timeago.js/lib/lang/ko';

register('ko', ko);

export function FormatAgo(date: TDate) {
  return format(date, 'ko');
}
