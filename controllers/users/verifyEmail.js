const { NotFound } = require("http-errors");

const { User } = require("../../model");

const verifyEmail = async (req, res, next) => {
  try {
    const { verificationToken } = req.params;
    const user = await User.findOne({ verificationToken });
    
    if (!user) {
      throw NotFound("User not found");
    }

    await User.findByIdAndUpdate(user._id, { verify: true, verificationToken: null, });
    
    res.json({
      status: "success",
      code: 200,
      message: "'Verification successful"
    });

  } catch (error) {
    next(error);
  }
}

module.exports = verifyEmail;