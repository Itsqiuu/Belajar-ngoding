// cara membuat variabel
var a = "a";
let b = "b";
const c = "c";

// variabel bisa menampung tipe data String(text),int(angka),boolean(true/false),array,object

let nama = "bryan";
let umur = 22;
let apakahbenar = true;
let uang = 5000.5;

// operator aritmatika

let angka1 = 10;
let angka2 = 20;
console.log(angka1 + angka2, "penjumlahan");
console.log(angka1 - angka2, "pengurangan");
console.log(angka1 * angka2, "perkalian");
console.log(angka1 / angka2, "pembagian");
console.log(angka1 % angka2, "modulus/sisa bagi");

console.log("")

let penampungHasilOperatorAritmatika = angka1 + angka2;
console.log(penampungHasilOperatorAritmatika);

penampungHasilOperatorAritmatika = angka1 - angka2;
console.log(penampungHasilOperatorAritmatika);

penampungHasilOperatorAritmatika = angka1 * angka2;
console.log(penampungHasilOperatorAritmatika);

penampungHasilOperatorAritmatika = angka1 / angka2;
console.log(penampungHasilOperatorAritmatika);

penampungHasilOperatorAritmatika = angka1 % angka2;
console.log(penampungHasilOperatorAritmatika);

// dengan operator aritmatika, string juga bisa ditambah namun tidak bisa dikurang
let firstname = "yeah";
let lastname = "boyy" ;
let fullname = (firstname + " " + lastname);
console.log(fullname);
console.log(firstname + " " + lastname);
console.log(firstname - lastname);

// alur pembacaan Kode
// untuk membaca kode kalian harus membaca dari kiri ke kanan, dan atas ke bawah
// contoh

let number = 20;
console.log(number + 10);
number = 10;
console.log(number + 10);
number = false;
console.log(number + 10);

// pertanyaan kenapa false ditambah 10 hasilnya 10?karena false = 0,dan true = 1
// contoh
console.log(true + 10,"(true ditambah 10)");

// membaca eror
// jangan takur eror,justru yang harus ditakuti adalah tidak ada eror
// karena dalam project jika ada bug tapi tidak ada eror,maka akan membuat kita kesusahan

//contoh eror
const hewan = "jerapah";
console.log (hewan);
// hewan = buaya;

//untuk auto komentar sebuah baris bisa menggunakan ctrl+ slash(/)

//tips : selalu teliti,jika ada eror dibaca aja,untuk belajar ngoding perlu kebiasaan karena ngoding = habbit