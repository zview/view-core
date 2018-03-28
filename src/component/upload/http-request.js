/**
 * Created by luther on 18/2/3.
 */

export class _http_request {

    constructor(action, method)
    {
        if (typeof XMLHttpRequest === 'undefined') {
            return;
        }

        this.action = action;
        this.method = method;
        this.$http = new XMLHttpRequest();
    }


    precall(onProgress, onLoaded, onError)
    {
        let vm = this;

        //Progress
        if (vm.$http.upload) {
            vm.$http.upload.onprogress = function progress(e) {
                if (e.total > 0) {
                    e.percent = e.loaded / e.total * 100;
                }
                onProgress(e);
            };
        }

        //Error
        vm.$http.onerror = function error(e) {
            onError(e);
        };

        //Complete
        vm.$http.onload = function onload() {
            var status = vm.$http.status;
            var error = vm.getError(vm.action, vm.method, status);
            var data = vm.$http.responseText || vm.$http.response;
            onLoaded(status, error, vm.getBody(data));
        };
    }

    execute(data, headers, withCredentials, crossDomain, filename, file, blob)
    {
        let vm = this;

        //Action & Method
        vm.$http.open(vm.method, vm.action, true);  //是否异步

        //Credential
        if (withCredentials && 'withCredentials' in vm.$http) {
            vm.$http.withCredentials = true;
        }

        //Header
        if (crossDomain) {
            let lorigin = window.location.origin; //'*'
            vm.$http.setRequestHeader('Access-Control-Allow-Origin', lorigin);
        }
        const hheaders = headers || {};
        for (let item in hheaders) {
            if (hheaders.hasOwnProperty(item) && hheaders[item] !== null) {
                vm.$http.setRequestHeader(item, hheaders[item]);
            }
        }

        //FormData
        const formData = new FormData();
        if (data) {
            Object.keys(data).map(key => {
                formData.append(key, data[key]);
            });
        }
        formData.append(filename, blob!=null?blob:file);

        //发送
        vm.$http.send(formData);
    }


    getError(action, method, status) {
        const msg = `fail to ${method} ${action} ${status}'`;
        const err = new Error(msg);
        err.status = status;
        err.method = method;
        err.url = action;
        return err;
    }

    getBody(text) {
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

}
