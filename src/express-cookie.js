class ExpressCookie {
    constructor(req, res) {
        this.req = req;
        this.res = res;
    }
    set(name, value, options) {
        this.res.cookie(name, value, options);
    }
    get(name) {
        return this.req.cookies[name];
    }
    remove(name) {
        this.res.clearCookie(name);
    }
}

module.exports = ExpressCookie;
