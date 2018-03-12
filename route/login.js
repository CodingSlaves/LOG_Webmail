const models = require('../lib/dbModels');
module.exports= async (ctx,next)=>{
    try{
        const user = await models.User.findOne({ID:String(ctx.request.body.ID)});
        if(user.PW === String(ctx.request.body.PW)){
            ctx.session.ID = ctx.request.body.ID;
            ctx.session.PW = ctx.request.body.PW;
            ctx.redirect('/inbox');
        }
    }
    catch(err){
        console.error(err);
    }
};
