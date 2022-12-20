const { User } = require("../../model");
const path = require("path");
const fs = require("fs/promises")

const avatarDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
        const { path: tempUpload, originalname } = req.file;
        const { _id } = req.user;
        const imageName = `${_id}_${originalname}`;

        try {
                const resultUpload = path.join(avatarDir, imageName);
                await fs.rename(tempUpload, resultUpload);
                const avatarURL = path.join("public", "avatars", imageName);
                await User.findByIdAndUpdate(req.user._id, { avatarURL });
                res.json({ avatarURL });

        } catch (error) {
                await fs.unlink(tempUpload);
                throw error;
        }
};

module.exports = updateAvatar;