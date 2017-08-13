import format from '../util/date';

export default function (val) {
  return format.formatDate.format(new Date(val), 'hh:mm:ss');
};
