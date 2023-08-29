const nodemailer = require("nodemailer");
const {EMAIL, PASSWORD} = require('../env.js')

// Testing account
const signup = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  let message = {
    from: '"Test Account" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Test", // Subject line
    text: "This is a testing email", // plain text body
    html: "<b>This is a testing email</b>", // html body
  };

  transporter
    .sendMail(message)
    .then((info) => {
      return res.status(201).json({
        msg: "Email received!",
        info: info.messageId,
        preview: nodemailer.getTestMessageUrl(info),
      });
    })
    .catch((error) => {
      return res.status(500).json({ error });
    });

  // res.status(201).json("Signup Succesfully!");
};

// Gmail account
const getBill = (req, res) => {
  let config = {
    service: "gmail",
    auth: {
      user: "",
      pass: "",
    },
  };

  let transporter = nodemailer.createTransport(config);

  res.status(201).json("Getbill Succesfully!");
};

module.exports = {
  signup,
  getBill,
};
