import jsCookie from 'js-cookie'
import ExpressCookie from './express-cookie'

export default class SsrCookie {
    constructor(req = null, res = null) {
        const isServer = req;
        if(isServer) {
            this.cookie = new ExpressCookie(req, res);
        }
        else {
            this.cookie = jsCookie;
        }
    }
    set(name, value, options) {
        this.cookie.set(name, value, options);
    }
    get(name) {
        return this.cookie.get(name);
    }
    remove(name) {
        this.cookie.remove(name);
    }
}

SsrCookie.create = function (req, res) {
    return new SsrCookie(req, res);
}
