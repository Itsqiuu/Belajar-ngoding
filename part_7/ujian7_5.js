// Tugas 1
// Buatlah sebuah fungsi bernama shoutOut(), yang mengembalikan nilai berupa "Halo Function!", 
// yang kemudian akan ditampilkan di console.

//bikin fungsinya disini
function shoutOut(){

    return "Halo Function!"
}

console.log(shoutOut());


// ------------------------------------
console.log('');
// ------------------------------------


// Tugas 2
// Buatlah sebuah fungsi bernama calculateMultiply(), yang mengembalikan nilai berupa hasil kali dari 
// dua parameter yang dikirim.

//bikin fungsinya disini
function calculateMultiply(angka1,angka2){
    hasil = angka1*angka2
    return hasil
}
let num1 = 8
let num2 = 2

let hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian);

// // ------------------------------------
console.log('')
// -----------------------------------

// Tugas 3
// Buatlah sebuah fungsi bernama processSentence(), yang akan memproses seluruh parameter yang diinput menjadi 
// satu kalimat berikut: 
// "Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"

//bikin fungsinya disini
function processSentence(Name,Age,Address,hobby){
    hasil = `Nama saya ${Name}, umur saya ${Age}, alamat saya ${Address}, dan saya punya hobby yaitu ${hobby}!`
return hasil;
}

let name = "Agus";
let age = 30;
let address = "Jln. Malioboro, Yogjakarta";
let hobby = "gaming";

let fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"