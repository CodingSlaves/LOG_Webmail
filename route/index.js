module.exports = async (ctx,next)=>{
  await ctx.render('index.html');
  await next();
};