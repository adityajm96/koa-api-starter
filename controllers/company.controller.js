module.exports = {
    async create(ctx) {
        try {
            ctx.body = await ctx.db.Company.create({
                name: ctx.request.body.name,
                city: ctx.request.body.city,
                address: ctx.request.body.address,
                userId: ctx.state.user
            });
            console.log('XXXXXXXXXXXXXXX : ' + ctx.state.user);
        } catch (err) {
            console.log(`${err}`)
            ctx.throw(500, err);
        }
    },

    async find(ctx) {
        try {
            ctx.response.body = await ctx.db.Company.findAll({
                where: { userId: ctx.state.user },
                include: [
                    {
                        model: ctx.db.Job,
                        required: false
                    }
                ]
            });

        } catch (err) {
            ctx.throw(500, err);
        }
    },

    async findOne(ctx) {
        try {
            const company = await ctx.db.Company.findOne({
                where: { id: ctx.params.id }
            });
            if (!company) {
                ctx.throw(404, 'Not found');
            } else {
                ctx.response.body = company;
            }

        } catch (err) {
            ctx.throw(500, err);
        }
    },
    async destroy(ctx) {
        try {
            const result = await ctx.db.Company.destroy({
                where: {
                    id: ctx.params.id
                }
            });
            ctx.response.body = (result === 0) ? ctx.throw(404, 'No record found') : "Record deleted";
        } catch (err) {
            ctx.throw(500, err);
        }
    },
    async update(ctx) {
        try {
            const result = await ctx.db.Company.update({
                name: ctx.request.body.name,
                city: ctx.request.body.city,
                address: ctx.request.body.address
            }, { returning: true, where: { id: ctx.params.id } });
            ctx.response.body = (result === 0) ? ctx.throw(404, 'No record found') : "Record Updated";
        } catch (err) {
            ctx.throw(500, err);
        }
    }
};
