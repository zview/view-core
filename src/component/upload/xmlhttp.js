function getError(action, method, xhr) {
    const msg = `fail to ${method} ${action} ${xhr.status}'`;
    const err = new Error(msg);
    err.status = xhr.status;
    err.method = method;
    err.url = action;
    return err;
}

function getBody(xhr) {
    const text = xhr.responseText || xhr.response;
    if (!text) {
        return text;
    }

    try {
        return JSON.parse(text);
    }
    catch (e) {
        return text;
    }
}

function isError(status) {
    console.log('xmlhttp iserror');
    return status < 200 || status >= 300;
}

export default function upload(option) {

    if (typeof XMLHttpRequest === 'undefined') {
        return;
    }

    const xhr = new XMLHttpRequest();
    const action = option.action;
    const method = option.method;

    //Progress
    if (xhr.upload) {
        xhr.upload.onprogress = function progress(e) {
            if (e.total > 0) {
                e.percent = e.loaded / e.total * 100;
            }
            option.onProgress(e);
        };
    }

    //Error
    xhr.onerror = function error(e) {
        option.onError(e);
    };

    //Complete
    xhr.onload = function onload() {
        var iserror = option.isError?option.isError(xhr.status, getBody(xhr)):isError(xhr.status);
        console.log('onload', iserror);
        if (iserror) {
            return option.onError(getError(action, method, xhr), getBody(xhr));
        }
        option.onSuccess(getBody(xhr));
    };

    //Action & Method
    xhr.open(method, action, true);  //是否异步

    //Credential
    if (option.withCredentials && 'withCredentials' in xhr) {
        xhr.withCredentials = true;
    }

    //Header
    if (option.crossDomain) {
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    }
    const headers = option.headers || {};
    for (let item in headers) {
        if (headers.hasOwnProperty(item) && headers[item] !== null) {
            xhr.setRequestHeader(item, headers[item]);
        }
    }

    //FormData
    const formData = new FormData();
    if (option.data) {
        Object.keys(option.data).map(key => {
            formData.append(key, option.data[key]);
        });
    }
    formData.append(option.filename, option.blob?option.blob:option.file);

    //发送
    xhr.send(formData);
}
