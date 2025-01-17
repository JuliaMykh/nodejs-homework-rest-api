const { Conflict } = require("http-errors");
const bcript = require("bcryptjs");
const gravatar = require("gravatar");
const { v4 } = require("uuid");

const { User } = require("../../model");
const { sendContirmationEmail } = require("../../helpers");

const register = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })
        
        if (user){
            throw new Conflict(`Email '${email}' in use`);
        }

        const verificationToken = v4();
        const avatarURL = gravatar.url(email);
        const hashPassword = bcript.hashSync(password, bcript.genSaltSync(10));
        
        const result = await User.create({ email, password: hashPassword, avatarURL, verificationToken });

        await sendContirmationEmail(email, verificationToken);
        
        res.status(201).json({
            status: "success",
            code: 201,
            user: {
                email: result.email,
                subscription: result.subscription,
                avatarURL,
                verificationToken
            },
        });

    } catch (error) {
        next(error);
    }
}

module.exports = register;