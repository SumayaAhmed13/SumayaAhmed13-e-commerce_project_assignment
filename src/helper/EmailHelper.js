const nodemailer=require("nodemailer")

const EmailSend=async(EmailTo,EmailText,EmailSubject)=>{

    let  transport= nodemailer.createTransport({
        host:"mail.teamrabbil.com",
        port:25,
        secure:false,
        auth:{user:"info@teamrabbil.com",pass:"~sR4[bhaC[Qs"},
        tls:{rejectUnauthorized:false}
    })



   //console.log(transport);

   let mailOption={
    from:'Test mail For <info@teamrabbil.com>',
    to:EmailTo,
    subject:EmailSubject,
    text:EmailText

   }

return transport.sendMail(mailOption);

}
module.exports=EmailSend
