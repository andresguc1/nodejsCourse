const bcrypt = require('bcrypt')

const password = '123Secure!'

bcrypt.hash(password, 5, function (err, hash) {
    console.log(hash)

bcrypt.compare("123Secure!", hash, function(err, res){
    console.log(res)
})
})

