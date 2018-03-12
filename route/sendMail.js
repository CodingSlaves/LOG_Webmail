const mailer = require('nodemailer');
module.exports = async (ctx) => {
    let smtpTransport = mailer.createTransport({
        host : 'teamlog.mail.kr',
        auth : {
            user : ctx.session.ID + '@teamlog.mail.kr',
            pass : ctx.session.PW
        }
    });
    let mail = {
        from : ctx.session.ID +'teamlog.mail.kr',
        to : ctx.request.body.to,
        subject : ctx.request.body.subject,
        text : ctx.request.body.text,
        html : ctx.request.body.html
    };
    smtpTransport.sendMail(mail,(error,info) =>{
        if(error){
            ctx.status = 500;
            ctx.render('404',{message:'Error in send mail'});
        }
        else {
            console.log('message sent '+info.messageId);
            ctx.redirect('/sent-mail');
        }
    });
};