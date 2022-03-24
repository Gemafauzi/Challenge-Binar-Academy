const bycypt = require('bcrypt')
const User = {
    id: 1,
    username: 'rifki@mail.com',
    password: bycypt.hashSync('kiki12', 10),
    login: false
}

module.exports = User