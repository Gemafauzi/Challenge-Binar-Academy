const dataPenjualanPakAldi = [{
        namaProduct: 'Sepatu Futsal Nike Vapor Academy 8',
        hargaSatuan: 760000,
        kategori: "Sepatu Sport",
        totalTerjual: 90,
    },
    {
        namaProduct: 'Sepatu Warrior Tristan Black Brown High',
        hargaSatuan: 960000,
        kategori: "Sepatu Sneaker",
        totalTerjual: 37,
    },
    {
        namaProduct: 'Sepatu Warrior Tristan Maroon High ',
        kategori: "Sepatu Sneaker",
        hargaSatuan: 360000,
        totalTerjual: 90,
    },
    {
        namaProduct: 'Sepatu Warrior Rainbow Tosca Corduroy',
        hargaSatuan: 120000,
        kategori: "Sepatu Sneaker",
        totalTerjual: 90,
    }
]

// looping untuk memanggil array of object sekaligus memanggil properti di dalam array of object dengan menggunakan looping
for (let i = 0; i < dataPenjualanPakAldi.length; i++) {
    console.log(dataPenjualanPakAldi[i].totalTerjual)
}

// Menjumlahkan totalTerjual dengan menggunakan looping dengan cara mengambil properti dari dalam array of object dataPenjualanPakAldi

let totalJual = 0
for (let i = 0; i < dataPenjualanPakAldi.length; i++) {
    totalJual += dataPenjualanPakAldi[i].totalTerjual
}


// Memanggil hasil penjumlahan dari total terjual
function hitungTotalPenjualan(dataPenjualan) {
    return totalJual
}

console.log(hitungTotalPenjualan(dataPenjualanPakAldi))