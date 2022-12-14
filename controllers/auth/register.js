const { Conflict } = require("http-errors");

const { User } = require("../../model");


const register = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })
        
        if (user){
            throw new Conflict(`Email '${email}' in use`);
        }

        const result = await User.create({ email, password });
        res.status(201).json({
            status: "success",
            code: 201,
            user: {
                email: result.email,
                subscription: result.subscription,
            },
        });

    } catch (error) {
        next(error);
    }
}

module.exports = register;