module.exports = {
    /**
        * @api {post} /Jobs
        * @apiVersion 0.1.0
        * @apiGroup Jobs
        * @apiDescription signIn Api with email and password.
        * @apiName createJob
        * @apiParam {String} [title] Job title.
        * @apiParam {Number} [CompanyId] Company Id. 
        * @apiSuccess {String} Msg signIn successful.
        * @apiSuccessExample {json} Success-Response: HTTP/1.1 200 OK
        *      { "title": "mytitle","CompanyId": 1 }
        * @apiParamExample {json} Request-create job:
                    { "title": "mytitle","CompanyId": 1 }
        * @apiHeader {String} authorization Auithorization header (Token).
        * @apiHeaderExample {json} Request-authorization header: 
        * {"authorization":"dbghddjhjdnjkbdvvcfjh"}          
        */
    async create(ctx) {
        try {
            const req_title = ctx.request.body.title;
            const req_companyId = ctx.request.body.CompanyId;
            if (!req_title) {
                ctx.throw(400, 'Invalid request. Please provide title');
            }

            if (!req_companyId) {
                ctx.throw(400, 'Invalid request. Please provide CompanyId');
            }

            ctx.response.body = await ctx.db.Job.create({
                title: req_title,
                CompanyId: req_companyId
            });


        } catch (error) {
            ctx.throw(500, error);
        }
    },
    async find(ctx) {

        try {
            ctx.response.body = await ctx.db.Job.findAll({
                include: [{
                    model: ctx.db.Candidate
                }]
            });
        } catch (error) {
            ctx.throw(500, error);
        }
    }

};