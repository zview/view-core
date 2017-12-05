export default function (val, len) {
    if (!val) return '';
    if(!len) return val;
    val = val.toString();
    return val.substr(0, len);
};
