exports.recieve = async (ctx,next)=>{
  await ctx.render('index.html');
  await next();
};
exports.send = async (ctx,next)=>{
  await ctx.render('mail-write.html');
  await next();
};