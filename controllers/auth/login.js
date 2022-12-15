const { Unauthorized } = require('http-errors');
const bcript = require("bcryptjs");
const jwt = require('jsonwebtoken');

const { User } = require("../../model");

const { SECRET_KEY } = process.env;

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        
        if (!user) {
            throw new Unauthorized("Email or password is wrong");
        }
        const passwordCompare = bcript.compareSync(password, user.password);
        
        if (!passwordCompare) {
            throw new Unauthorized("Email or password is wrong");
        }

        const payload = {
            id: user._id,
        };
        const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" })
        res.json({
            status: "success",
            code: 200,
            data: {
                token
            }
        })
        
    } catch (error) {
        next(error);
    }
};

module.exports = login;
