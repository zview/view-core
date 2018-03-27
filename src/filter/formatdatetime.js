import format from '../util/common-date';

export default function (val, fmt) {
    if (!val) return '';
    if(!fmt) fmt = format.PATTERN.datetime; //'yyyy-MM-dd hh:mm:ss';
    return format.formatDate.format(new Date(val), fmt);
};
