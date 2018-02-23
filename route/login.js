const models = require('../lib/dbModels');
module.exports = async (ctx,next)=>{
  models.User.findOne({ID:ctx.request.body.ID})
      .then(result=>{
          console.log(result);
          ctx.session.
      })
      .catch(err=>{
          console.error(err);
          throw err;
      });
};