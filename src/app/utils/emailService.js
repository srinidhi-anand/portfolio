import nodemailer from 'nodemailer';

require('dotenv').config();

export default async function emailService(data) {

    const formData = {};
    Object.values(Array.from(data)).forEach(([key, value]) => {
        formData[`${key}`] = value;
    });
    const transporter = nodemailer.createTransport({
        // host: "live.smtp.mailtrap.io",
        // port: 587,
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.MY_EMAIL,
            pass: process.env.MY_PASSWORD,
        }
    });

    // Configure the mailoptions object
    const mailOptions = {
        from: formData.email,
        to: 'srinidhianand4@gmail.com',
        subject: `Mail from ${formData.name} - Freelance project`,
        html: `<h1>Welcome</h1><br/> <h2>Hey Sri, you got a new freelance Call!</h2><br/> <h4><b>Project Details: </b></h4><br/> <h4>${formData.projectDetails}</h4><p>${formData.message}</p><br/><p>Contact Details: ${formData.mobile ? formData.mobile : 'No mobile Number'}</p><br/><br/><br/><br/><br/><br/><br/>`,
    };

    await new Promise((resolve, reject) => {
        transporter.verify(function (error, success) {
            if (error) {
                console.log('Connection error:', error);
                return resolve(false);
            } else {
                console.log('Server is ready to take our messages', success);
                // Send the email
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log('Error:', error);
                        return resolve(false)
                    } else {
                        console.log('Email sent: ');
                        return resolve(true)
                    }
                });
            }
        });
    });

}