const { Conflict } = require("http-errors");
const bcript = require("bcryptjs");
const gravatar = require("gravatar");

const { User } = require("../../model");


const register = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })
        
        if (user){
            throw new Conflict(`Email '${email}' in use`);
        }

        const avatarURL = gravatar.url(email);
        const hashPassword = bcript.hashSync(password, bcript.genSaltSync(10));
        const result = await User.create({ email, password: hashPassword, avatarURL});
        res.status(201).json({
            status: "success",
            code: 201,
            user: {
                email: result.email,
                subscription: result.subscription,
                avatarURL,
            },
        });

    } catch (error) {
        next(error);
    }
}

module.exports = register;