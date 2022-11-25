// Soal 1
console.log(`Soal 1`)
function cetakFunction() {
    return `Hallo Nama saya Daniel Ian Kurniawan`
}

console.log(cetakFunction())

// Soal 2
console.log(`\nSoal 2`)
function myFunction(angka1, angka2) {
    return angka1 + angka2
}

let angka1 = 20
let angka2 = 7
let output = myFunction(angka1, angka2)
console.log(output)

// Soal 3
console.log(`\nSoal 3`)
// function Hello(){
const Hello = () => {
    return "Hello"
}

console.log(Hello())

// Soal 4
console.log(`\nSoal 4`)
let obj = {
    nama : "john",   
    umur : 22,
    bahasa : "indonesia"
}

console.log(obj.bahasa)

// Soal 5
console.log(`\nSoal 5`)
let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku" , 1992]
let objDaftarPeserta = {
    nama: arrayDaftarPeserta[0],
    jenis_kelamin: arrayDaftarPeserta[1],
    hobi: arrayDaftarPeserta[2],
    tahun_lahir: arrayDaftarPeserta[3]
}

console.log(objDaftarPeserta)

// Soal 6
console.log(`\nSoal 6`)
var fruit = [
    {nama: "Nanas", warna: "Kuning", adaBijinya: false, harga: 9000},
    {nama: "Jeruk", warna: "Oranye", adaBijinya: true, harga: 8000},
    {nama: "Semangka", warna: "Hijau & Merah", adaBijinya: true, harga: 10000},
    {nama: "Pisang", warna: "Kuning", adaBijinya: false, harga: 5000}
]

var fruitFilter = fruit.filter(function (item) {
    return item.adaBijinya === false
})

console.log(fruitFilter)

// Soal 7
console.log(`\nSoal 7`)
let phone = {
    name: "Galaxy Note 20",
    brand: "Samsung",
    year: 2020
}

const {name, brand, year} = phone
console.log(name, brand, year) 

// Soal 8
console.log(`\nSoal 8`)
let dataBukuTambahan= {
    penulis: "john doe",
    tahunTerbit: 2020 
}
  
let buku = {
    nama: "pemograman dasar",
    jumlahHalaman: 172
}
  
let objOutput = {...dataBukuTambahan, ...buku}

console.log(objOutput)

// Soal 9
console.log(`\nSoal 9`)
let mobil = {
    merk : "bmw",
    color: "red",
    year : 2002
}
    
const functionObject = (param) => {
    return param
}

console.log(functionObject(mobil))

console.log()

