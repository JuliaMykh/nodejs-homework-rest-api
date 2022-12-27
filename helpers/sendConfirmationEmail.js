
const sendEmail = require("./sendEmail");

const sendContirmationEmail = async (email, verificationToken) => {
  
  const mail = {
    to: email,
    subject: "Email confirmation",
    html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${verificationToken}">Confirm Email</a>`
  };

  return sendEmail(mail);
};

module.exports = sendContirmationEmail;

