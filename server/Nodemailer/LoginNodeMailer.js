import nodemailer from 'nodemailer'

const LoginMailer = (newData) => {

    console.log("------------SendingLoginMail--------------");
    console.log("Mailer", newData)

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, 
        auth: {
            user: 'chandrashekharsaini322@gmail.com',
            pass: 'volfdzdbyovzmlix'
        },
        tls: {
            rejectUnauthorized: false
        }
    })


    const mailUser = {
        from: 'chandrashekharsaini322@gmail.com',
        to: newData.email,
        subject: "Login Successful - Welcome Back!",

        html: `
        <div style="font-family: Arial, sans-serif; color: #333; padding: 15px 0;">
          <h2 style="color: #2e6da4; font-size: 24px;">Welcome Back to Heritage Estate!</h2>
          <p style="font-size: 16px;">Dear  ${newData.username},</p>
          <p style="font-size: 16px;">
            We are pleased to inform you that your recent login to the Estate platform was successful. 
            It is a privilege to have you back, and we trust you will find our services to be of the highest standard.
          </p>
          <p style="font-size: 16px;">
            Should you require any further assistance or encounter any issues during your experience on our platform, 
            please do not hesitate to reach out to our dedicated support team. We remain at your service and are eager to assist in any way we can.
          </p>
          <p style="font-size: 16px;margin-top: 20px;">
            Wishing you continued success and a pleasant experience,<br>
          <p>
            <strong style="font-size: 18px;margin-top: 10px;">The Heritage Estate Team</strong>
          </p>
          <footer style="margin-top: 30px; font-size: 12px; color: #888;">
            <p>This is an automated message. Please do not reply directly to this email.</p>
            <p>For any inquiries, contact our support team at <a href="mailto:chandrashekhar@estatewebsite.com" style="color: #2e6da4;">support@estatewebsite.com</a>.</p>
          </footer>
        </div>
      `,

    }

    const mailOption = transporter.sendMail(mailUser, (error, inof) => {
        console.log("I am inof", inof)
        if (error) {
            // return next(errroHandler (400, "Error in Sending Mail"))
            console.log(error)
        }
        else {
            console.log("Mail Send Successfully")
        }
    })

}

export default LoginMailer;