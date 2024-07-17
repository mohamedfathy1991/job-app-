import nodemailer  from "nodemailer"
const transporter = nodemailer.createTransport({
      // Use `true` for port 465, `false` for all other ports
      service:"gmail",
     auth: {
         user:'mohamed.electronics1991@gmail.com',
         pass:"jkbh ylts qqgi jpgi"
   
     },
   });
   
   export  async function sendmail(mail, name='man' ,opt) {
        
               const info = await transporter.sendMail({
                     from: '"omar fathy👻" mohamed.electronics1991@gmail.com', // sender address
                     to:mail , // list of receivers
                     subject: "Hello ✔", // Subject line
                     text: "code OTP", // plain text body
                     html: `<h2> welcome ${name} </h2>
                            <h3>otp is ${opt} </h3>
                     
                     `, 
                   });
                 
                   console.log("Message sent: %s", info.messageId);
   
       
         // send mail with defined transport object
        
       }