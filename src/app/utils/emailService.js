import nodemailer from 'nodemailer';

require('dotenv').config();

export default function emailService(data) {
    console.log('formData >> ', data);
    console.log( process.env.MY_EMAIL);
    console.log( process.env.MY_PASSWORD);
    const formData = {};
    Object.values(Array.from(data)).forEach(([key, value]) => {
        formData[`${key}`] = value;
    })
    console.log( formData.email);
    console.log( formData.mobile);
    console.log( formData.projectDetails);
    console.log( formData.name);
    const transporter = nodemailer.createTransport({
        // host: "live.smtp.mailtrap.io",
        // port: 587,
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
        //   user: "api",
        //   pass: "6b4970fce5ee7499a2ecedd8371fd776"
          user: process.env.MY_EMAIL,
          pass: 'vonc qjql nitz juyc', // process.env.MY_PASSWORD,
        }
      });

    // var transport = nodemailer.createTransport({
    //     host: "live.smtp.mailtrap.io",
    //     port: 587,
    //     auth: {
    //       user: "api",
    //       pass: "a75b162c07c743f2cc13b70693f76f6e"
    //     }
    //   });
    // var transport = nodemailer.createTransport({
    //   host: "live.smtp.mailtrap.io",
    //   port: 587,
    //   auth: {
    //     user: "api",
    //     pass: "b2a95f3944b8b06608a138c16af4c19d"
    //   }
    // });

    // Configure the mailoptions object
    const mailOptions = {
        from: formData.email,
        to: 'srinidhianand4@gmail.com',
        subject: `Mail from ${formData.name} - Freelance project`,
        html: `<h1>Welcome</h1><br/> <h2>Hey Sri, you got a new freelance Call!</h2><br/> <h4><b>Project Details: </b></h4><br/> <h4>${formData.projectDetails}</h4><p>${formData.message}</p><br/><p>Contact Details: ${formData.mobile ? formData.mobile : 'No mobile Number'}</p><br/><br/><br/><br/><br/><br/><br/>`,
        // headers: {
        //     "x-priority": "1",
        //     "x-msmail-priority": "High",
        //     importance: "high"
        // }
    };

    transporter.verify(function (error, success) {
        if (error) {
            console.log('Connection error:', error);
            return false;
        } else {
            console.log('Server is ready to take our messages', success);
            // Send the email
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log('Error:', error);
                    return false
                } else {
                    console.log('Email sent: ' + info.response);
                    return true
                }
            });

        }
    });

}