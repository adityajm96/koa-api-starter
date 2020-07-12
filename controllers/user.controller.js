const utilService = require('../services/utils.service');
const jwt = require('../services/jwt.service');

module.exports = {
    /**
     * @api {post} /signUp
     * @apiGroup Users
     * @apiDescription Signup Api with email and password.
     * @apiName singnUp
     * @apiParam {String} [email] Users unique email ID.
     * @apiParam {String} [password] Users password. 
     * @apiSuccess {String} Msg Signup successful.
     * @apiVersion 0.1.0
     * @apiSuccessExample {json} Success-Response: HTTP/1.1 200 OK
     *     {
     *       "msg": "Signup successful"
     *     }
     * @apiParamExample {json} Request-signup:
                 { "email": "abc@google.com",
                "password": "mypsw" }
     */
    async signUp(ctx) {
        try {
            let { email, password } = ctx.request.body;

            if (!email) {
                ctx.throw(400, 'Please provide the email address');
            }

            if (!password) {
                ctx.throw(400, 'Please provide the password');
            }
            const encryptedPassword = await utilService.hashPassword(password);
            await ctx.db.user.create({
                email, password: encryptedPassword
            });
            ctx.response.body = { 'msg': 'Signup successful' };
        } catch (error) {
            throw (500, error);
        }
    },
    /**
         * @api {post} /signIn
         * @apiVersion 0.1.0
         * @apiGroup Users
         * @apiDescription signIn Api with email and password.
         * @apiName signIn
         * @apiParam {String} [email] Users unique email ID.
         * @apiParam {String} [password] Users password. 
         * @apiSuccess {String} Msg signIn successful.
         * @apiSuccessExample {json} Success-Response: HTTP/1.1 200 OK
         *     {
         *       "token": "XXXXXXXXXXXX"
         *     }
         * @apiParamExample {json} Request-signIn:
                     { "email": "abc@google.com",
                    "password": "mypsw" }
         */
    async signIn(ctx) {
        try {
            let { email, password } = ctx.request.body;

            if (!email) {
                ctx.throw(400, 'Please provide the email address');
            }

            if (!password) {
                ctx.throw(400, 'Please provide the password');
            }
            const user = await ctx.db.user.findOne({
                where: {
                    email
                }
            });
            if (!user) {
                ctx.throw(500, 'Unable to process the request');
            }
            const matched = await utilService.comparePassword(password, user.password);
            if (matched) {
                const token = jwt.issue({ payload: user.id }, 60 * 60 * 60);
                ctx.response.body = { token }
            } else {
                ctx.response.body = { 'errorMsg': 'Login Failed' };
            }


        } catch (error) {
            throw (500, error);
        }


    }
}