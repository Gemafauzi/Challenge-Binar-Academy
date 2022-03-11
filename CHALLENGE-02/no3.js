/^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i

function checkEmail(email) {
    let hasil;
    let formatEmail = new RegExp(/^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i)



    if (typeof email === 'string') {
        if (formatEmail.test(email)) {
            return hasil = 'Email Valid'
        } else if (!formatEmail.test(email)) {
            var tanpaAt = email.indexOf("@");
            var tanpaTitik = email.indexOf(".")
            if (tanpaAt < 1 || tanpaTitik < 1) {
                return hasil = 'format tidak valid'
            } else {
                return hasil = 'Email in Valid'
            }
        }
    } else {
        return hasil = 'Tipe data invalid'
    }

}

console.log(checkEmail('apranata@binar.co.id'))
console.log(checkEmail('apranata@binar.com'))
console.log(checkEmail('apranata@binar'))
console.log(checkEmail('apranata'))

console.log(checkEmail(3322))

console.log(checkEmail())