import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

const PATTERN = {
  0: 'д',
  1: 'ч',
  2: 'м',
};

const formatDuration = (period) => {
  if (period === 0) {
    return '00м';
  }

  let isStarted = false;

  return dayjs
    .duration(period, 'seconds')
    .format('D H mm')
    .split(' ')
    .map((value, index) => {
      if (isStarted) {
        return `${value}${PATTERN[index]} `;
      }

      if (+value !== 0) {
        isStarted = true;

        return `${value}${PATTERN[index]} `;
      }

      return '';
    })
    .join('');
};

const formatDurationISO = period => dayjs
  .duration(period, 'seconds')
  .toISOString();

const getExtraDaysToArrival = (depDate, arrDate) => {
  const first = dayjs(depDate);
  const second = dayjs(arrDate);

  if (!first.isSame(second, 'date')) {
    const secondAsDays = Math.ceil(dayjs.duration(second.valueOf(), 'milliseconds').asDays());
    const firstAsDays = Math.ceil(dayjs.duration(first.valueOf(), 'milliseconds').asDays());

    return secondAsDays - firstAsDays;
  }

  return 0;
};

export { formatDuration, formatDurationISO, getExtraDaysToArrival };
