const dataPenjualanNovel = [{
        idProduct: "BOOK002421",
        namaProduk: "Pulang - Pergi",
        penulis: "Tere Liye",
        hargaBeli: 60000,
        hargaJual: 86000,
        totalTerjual: 150,
        sisaStok: 17,
    },
    {
        idProduct: "BOOK002351",
        namaProduk: "Selamat Tinggal",
        penulis: "Tere Liye",
        hargaBeli: 75000,
        hargaJual: 103000,
        totalTerjual: 171,
        sisaStok: 20,
    },
    {
        idProduct: "BOOK002941",
        namaProduk: "Garis Waktu",
        penulis: "Fiersa Besari",
        hargaBeli: 67000,
        hargaJual: 99000,
        totalTerjual: 213,
        sisaStok: 5,
    },
    {
        idProduct: "BOOK002941",
        namaProduk: "Laskar Pelangi",
        penulis: "Andrea Hirata",
        hargaBeli: 55000,
        hargaJual: 68000,
        totalTerjual: 20,
        sisaStok: 56,
    },
];

let keuntungan = 0;
let modal = 0;
let presentase = 0;
let penulis;
let produk;
let dataNovel = {};


let produkTerlaris = Math.max(...dataPenjualanNovel.map((e) => e.totalTerjual));
// perulangan
for (let i = 0; i < dataPenjualanNovel.length; i++) {
    // untuk mendapatkan keuntungan modal
    keuntungan +=
        // harga jual di kurangi harga beli dari seluruh data penjualan
        (dataPenjualanNovel[i].hargaJual - dataPenjualanNovel[i].hargaBeli) *
        dataPenjualanNovel[i].totalTerjual;

    // keuntungan dan modal dari setiap data penjualan data novel
    modal +=
        dataPenjualanNovel[i].hargaBeli *
        (dataPenjualanNovel[i].sisaStok + dataPenjualanNovel[i].totalTerjual);

    if (dataPenjualanNovel[i].totalTerjual === produkTerlaris) {
        penulis = dataPenjualanNovel[i].penulis;
        produk = dataPenjualanNovel[i].namaProduk;
    }
}

presentase = (keuntungan / modal) * 100;

function convertToRupiah(angka) {
    let rupiah = "";
    let angkarev = angka.toString().split("").reverse().join("");

    for (var i = 0; i < angkarev.length; i++)
        if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + ".";
    return (
        "Rp. " +
        rupiah
        .split("", rupiah.length - 1)
        .reverse()
        .join("")
    );
}
dataNovel = {
    Keuntungan: convertToRupiah(keuntungan),
    Modal: convertToRupiah(modal),
    presentase: presentase + " %",
    penulis: penulis,
    produk: produk,
};
console.log(dataNovel);