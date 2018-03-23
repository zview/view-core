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


    precall(onProgress, onSuccess, onError, isError)
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
            var iserror = (isError && isError!=null)?isError(vm.$http.status, vm.getBody(vm.$http)):vm.isStatueError(vm.$http.status);
            // var iserror = isError(vm.$http.status, vm.getBody(vm.$http));
            console.log('onload', iserror);
            if (iserror) {
                return onError(vm.getError(vm.action, vm.method, vm.$http), vm.getBody(vm.$http));
            }
            onSuccess(vm.getBody(vm.$http));
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


    getError(action, method, xhr) {
        const msg = `fail to ${method} ${action} ${xhr.status}'`;
        const err = new Error(msg);
        err.status = xhr.status;
        err.method = method;
        err.url = action;
        return err;
    }

    getBody(xhr) {
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

    isStatueError(status) {
        console.log('xmlhttprequest iserror');
        return status < 200 || status >= 300;
    }


}
