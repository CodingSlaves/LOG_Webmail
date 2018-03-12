
exports.inbox = async (ctx,next)=>{

    await ctx.render('inbox.html');
};
exports.send = async (ctx,next)=>{
    await ctx.render('mail-write.html');
};
exports.login = async (ctx,next)=>{
    await ctx.render('login.html');
};
exports.deposit = async (ctx,next) =>{
    await ctx.render('deposit.html');
};
exports.sentMail = async (ctx,next)=>{
    await ctx.render('sent-mail.html');
};