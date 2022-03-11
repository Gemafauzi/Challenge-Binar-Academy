function getAngkaTerbesarKedua(dataAngka) {
    if (dataAngka !== 0 && !dataAngka) {
        return "error karena data null"

    } else if (dataAngka === 0) {
        return 'Error data nol'

    } else {

        // mengurutkan angka terbesar ke kecil = 2,2,3,4,7,7,8,9 dibalikan = 9,8,7,7,4,3,2,2
        dataAngka.sort(function(a, b) {
            return a - b
        }).reverse()

        // Mencari Angka terbesar ke 1 
        let angkaTerbesar = Math.max(...dataAngka)

        // mengfilter angka dan mengetahui berapa banyak angka terbesarnya 8= index array 1-0=1 (berjumlah 1 buah)
        let filterAngka = dataAngka.filter(angka => angka == angkaTerbesar).length

        let terbesarKedua = 0

        // 2 - 0 = index ke 2
        let angkaTerbesarKedua = dataAngka[filterAngka - terbesarKedua]


        return angkaTerbesarKedua;

    }
}
const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8]

console.log(getAngkaTerbesarKedua(dataAngka))
console.log(getAngkaTerbesarKedua(0))
console.log(getAngkaTerbesarKedua())