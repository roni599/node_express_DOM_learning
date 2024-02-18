const userRegister = async (req, res) => {
    try {
        const { name, email, password, dob } = req.body;
        const newUser = {
            name,
            email,
            password,
            dob
        }
        return res.status(201).json({
            message: "new user was created",
            newUser
        })

    } catch (error) {
        return res.json({
            message: error.message
        })
    }
}

const userLogin = (req, res) => {
    try {
        const { email, password } = req.body;
        if (email === "ekroni99@gmail.com" && password === "12345") {
            return res.status(200).json({
                message: "user is loggedin"
            })
        }
        else {
            return res.status(404).json({
                message: "email/password is wrong"
            })
        }
    } catch (error) {
        return res.json({
            message: error.message
        })
    }
}
module.exports = {
    userRegister,
    userLogin
}