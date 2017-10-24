class HttpInterceptor {
    constructor($injector, $q) {
        'ngInject';

        this._$injector = $injector;
        this._$q = $q;
    }

    response = (res) => {
        return res.data;
    }

    responseError = (err) => {
        const _Notification = this._$injector.get('Notification');

        _Notification.error(err.data.error.message);
        return this._$q.reject(err);
    }
}

export default HttpInterceptor;