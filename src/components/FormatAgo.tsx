import React from 'react';
import TimeAgo from 'timeago-react';
import * as timeago from 'timeago.js';
import ko from 'timeago.js/lib/lang/ko';

interface IFormatAgo {
  date: Date | string;
  locale?: string;
}

timeago.register('ko', ko);

export function FormatAgo({ date, locale = 'ko' }: IFormatAgo) {
  return <TimeAgo datetime={date} locale={locale} />;
}
