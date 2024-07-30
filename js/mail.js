const email = {
    from: 'kost.ghevondyan1@gmail.com',
    to: 'gevond.1981@gmail.com',
    subject: 'Test email',
    text: 'This is a test email sent from the browser'
}
smtp.sendMail(email)
    .then(info => console.log(info))
    .catch(err => console.error(err))

const credentials = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'kost.ghevondyan1@gmail.com',
        pass: 'mypassword'
    }
}