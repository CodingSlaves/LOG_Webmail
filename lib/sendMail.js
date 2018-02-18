const mailer = require('nodemailer');
module.exports = async (ctx) => {
    let smtpTransport = nodemailer.createTransport({
       service : mail.teamlog.kr,
       auth : {
           user : ctx.request.body.user + '@teamlog.kr',
           pass : ctx.request.body.pass
       }
    });
    return smtpTransport
};