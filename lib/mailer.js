const mailer = require('nodemailer');
module.exports = async (ctx) => {
    let smtpTransport = mailer.createTransport({
        host : '127.0.0.1',
        auth : {
            user : ctx.request.body.user + '@teamlog.kr',
            pass : ctx.request.body.pass
        }
    });
    let mail = {
        from : ctx.session.user,
        to : ctx.request.body.to,
        subject : ctx.request.body.subject,
        text : ctx.request.body.text,
        html : ctx.request.body.html
    };
    smtpTransport.sendMail(mail,(error,info) =>{
        if(error){
            ctx.status = 500;
            ctx.render('404.html');
        }
        console.log('message sent '+info.messageId);
    });
};