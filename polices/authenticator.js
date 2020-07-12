const JwtService = require('../services/jwt.service');
module.exports = async (ctx, next) => {
    let token = '';
    if (ctx.request.headers && ctx.request.headers.authorization) {
        token = ctx.request.headers.authorization;
    } else {
        ctx.response.body = { 'errorMsg': 'Authorization header is missing' };
        ctx.response.status = 401;
        return;
    }
    const decodedToken = JwtService.verify(token);
    const user = await ctx.db.user.findOne({ where: { id: decodedToken.data.payload } });

    if(user) {
        ctx.state.user = user.id;
        await next();
    }
    else {
        ctx.err(401,'Unauthorized');
    }

};