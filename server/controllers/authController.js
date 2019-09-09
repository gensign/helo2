const bcrypt = require('bcryptjs');

const register = async (req, res) => {
    console.log("Register");
    console.log('');
    const db = req.app.get('db');
    const { user_id, username, password, profile_pic } = req.body;
    console.log("username: ", username);
    console.log('');
    const foundUser = await db.find_user([username, password]);
    console.log("foundUser: ", foundUser);
    console.log('');
    if (foundUser.length > 0) {
        console.log('User Found');
        console.log('')
        return res.status(400).send({ Register: false });
    }
    console.log('foundUser: ', foundUser);
    console.log('');
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const newUser = await db.register_user(username, password, profile_pic);
    console.log('newUser: ', newUser);
    console.log('');
    db.insert_hash({ hash, user_id: newUser[0].user_id })
        .then(() => {
            req.session.user = newUser[0]
            res.status(200).send({
                message: 'Logged In',
                user: req.session.user,
                loggedIn: true
            })
        }).catch(err => {
            res.status(500).send({ message: 'Failed to register' });
        })
};

const login = async (req, res) => {
    const db = req.app.get('db')
    const { user_id, username, password } = req.body
    console.log('username: ', username, password)
    console.log('')
    const user = await db.find_user([username, password])
    console.log('user: ', user)
    if (user.length > 0) {
        res.status(200).send({ logIn: true })
    } else {
        res.status(401).send({ loggedIn: false })
    }
}

const logout = (req, res) => {

};

module.exports = {
    register,
    login,
    logout
}