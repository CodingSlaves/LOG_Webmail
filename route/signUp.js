const models = require('../lib/dbModels');
module.exports = async (ctx,next) =>{
    const user = new models.User({
        ID:ctx.request.body.ID,
        PW:ctx.request.body.PW
    });
    user.save(()=>{console.log('saved ')});
};
