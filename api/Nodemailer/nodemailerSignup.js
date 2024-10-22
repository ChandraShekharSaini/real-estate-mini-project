import nodemailer from 'nodemailer'

const Mailer = (newData) => {

  console.log("------------SendingSignUpMail--------------");
  console.log("Mailer", newData)

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // or 'STARTTLS'
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
    subject: "Welcome to Estate - Signup Successful!",

    html: `
    <div style="font-family: Arial, sans-serif; color: #333; padding:15px 0;">
      <h2 style="color: #2e6da4; font-size: 24px;">Welcome to Heritage Estate!</h2>
      <p style="font-size: 16px;">Dear ${newData.username},</p>
      <p style="font-size: 16px;">
        We are thrilled to welcome you to the Estate platform! Your signup has been successfully completed, 
        and you are now part of a community dedicated to providing the best property listings and real estate solutions.
      </p>
      <p style="font-size: 16px;">
        Whether you're exploring properties or managing your account, our platform is designed to offer you an exceptional experience.
        If you need any help getting started, our support team is just an email away.
      </p>
      <p style="font-size: 16px;">
        We wish you all the best on your journey with us and hope your experience with Estate is rewarding and seamless.
      </p>
      <p style="font-size: 16px; margin-top:20px">
        Warm regards,<br>
        <strong>The Heritage Estate Team</strong>
      </p>
      <footer style="margin-top: 30px; font-size: 12px; color: #888;">
        <p>This is an automated message. Please do not reply directly to this email.</p>
        <p>For any inquiries, feel free to contact us at <a href="mailto:chandrashekhar@estatewebsite.com" style="color: #2e6da4;">support@estatewebsite.com</a>.</p>
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

export default Mailer;