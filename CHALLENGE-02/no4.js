function isValidPassword(email) {
    let regex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
        //mencari pola dari string// 


    if (typeof email === "string") {

        if (regex.test(email) === true) {
            return true
        } else if (regex.test(email) === false) {
            return false
        }
    } else return "Eror karena data null"


}



console.log(isValidPassword('Meong2021'))
console.log(isValidPassword('meong2021'))
console.log(isValidPassword('@eong'))
console.log(isValidPassword('Meong2'))
console.log(isValidPassword('0'))
console.log(isValidPassword())