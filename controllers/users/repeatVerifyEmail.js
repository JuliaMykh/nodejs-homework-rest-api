const { BadRequest } = require("http-errors");

const { User } = require("../../model");

const repeatVerifyEmail = async (req, res, next) => {
  try {
    const { email } = req.body;
    const { _id, verify } = await User.findOne({ email });

    if (verify) {
      throw BadRequest("Verification has already been passed");
    }

    await User.findByIdAndUpdate(_id, { verify: true, verificationToken: null });

    res.json({
    status: "succes",
    code: 200,
    message: "Verification email sent.",
  });
    
  } catch (error) {
    next(error);
  }
};

module.exports = repeatVerifyEmail;