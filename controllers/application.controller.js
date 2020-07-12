module.exports = {
    async create(ctx) {
        try {
            const candidate = await ctx.db.Candidate.create({
                firstname: ctx.request.body.firstname,
                lastname: ctx.request.body.lastname,
                email: ctx.request.body.email
            });

           ctx.body =  await ctx.db.Application.create({
                JobId:ctx.request.body.JobId,
                CandidateId:candidate.id,
            })

        } catch (err) {
            console.log(`${err}`)
            ctx.throw(500, err);
        }
    }
};