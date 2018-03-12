const models = require('../lib/dbModels');
module.exports =  (ctx) =>{
    models.User.findOne({ID:String(ctx.request.body.ID)})
        .then(async result=> {
            if (!result) {
                const user = new models.User({
                    ID: String(ctx.request.body.ID),
                    PW: String(ctx.request.body.PW)
                });
                user.save(() => {
                    console.log(user.ID + ' saved');
                    ctx.redirect('/');
                });
            }
            else
                await ctx.render('404',{message:"이미 있는 ID입니다"});
        })
};
