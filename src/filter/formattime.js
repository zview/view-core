import format from '../util/common-date';

export default function (val) {
    if (!val) return '';
    return format.formatDate.format(new Date(val), 'hh:mm:ss');
};
