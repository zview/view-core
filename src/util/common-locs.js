export default {
    get (name) {
        let value = window.localStorage.getItem(name);
        if (/^\{.*\}$/.test(value)) value = JSON.parse(value);
        return value;
    },
    set (name, value) {
        if (typeof value === typeof {}) value = JSON.stringify(value);
        return window.localStorage.setItem(name, value);
    },
    remove (name) {
        return window.localStorage.removeItem(name);
    },
    support() {
        return !!window.localStorage;
    }
}
