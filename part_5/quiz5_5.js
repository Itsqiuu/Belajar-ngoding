//1. Let's Form a Sentence

// Problem
// Pada tugas ini kamu diminta untuk melakukan penambahan string menggunakan simbol +.
//  Disediakan variable word. Tambahkan nilai word satu per satu dengan nilai variable lain
//  untuk membentuk sebuah kalimat. Jangan lupa menambahkan spasi di setiap kata, dan
//   tampilkan di console hasil penggabungannya! Kamu tidak perlu membuat variable baru!


//code here

// let word = 'JavaScript';
// let second = 'is';
// let third = 'awesome';
// let fourth = 'and';
// let fifth = 'I';
// let sixth = 'love';
// let seventh = 'it!';

// // ---------------------------------------
// console.log (word +" "+ second +" "+ third +" "+ fourth + " " + fifth + " " + sixth + " "+ seventh)
// // ---------------------------------------

// // 2. Index Accessing - 1 by 1
// // Problem
// // Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
// //  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
// //   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// // Hints
// // Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
// //  tersebut!

// let word = 'wow JavaScript is so cool';
// let exampleFirstWord = word[0] + word[1] + word[2] ;

// console.log('First Word: ' + exampleFirstWord);


// // // ---------------------------------------
// let word1 = word[0] + word[1] + word[2] ;
// let word2 = word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13] ;
// let word3 = word[15] + word[16] ;
// let word4 = word[18] + word[19] ;
// let word5 = word[21] + word[22] + word[23] + word[24] ;

// console.log('First Word : ' + word1);
// console.log('second Word : ' + word2);
// console.log('third Word : ' + word3);
// console.log('Fourth Word : ' + word4);
// console.log('Fifth Word : ' + word5);
// // // ---------------------------------------

// // 3. Breaking Sentence (Again) using Substring
// // Problem
// // Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!
            
// let word3 = 'wow JavaScript is so cool';
// let exampleFirstWord3 = word3.substring(0, 3);

// console.log('First Word: ' + exampleFirstWord3);


// // ---------------------------------------
// let ex1 = word3.substring(0,3);
// let ex2 = word3.substring(4,14);
// let ex3 = word3.substring(15,17);
// let ex4 = word3.substring(18,20);
// let ex5 = word3.substring(21,25);
// console.log('First Word = ' + ex1);
// console.log('Second Word = ' + ex2);
// console.log('Third Word = ' + ex3);
// console.log('Fourth Word = ' + ex4);
// console.log('Fifth Word = ' + ex5);
// // ---------------------------------------
// // 4. Breaking Sentence (yet Again) and Count Each Length
// // Problem
// // Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!

                
let word4 = 'wow JavaScript is so cool';
// let exampleFirstWord4 = word4.substring(0, 3);

// let firstWordLength = exampleFirstWord4.length;

// console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);

let ex1 = word4.substring(0,3);
let ex2 = word4.substring(4,14);
let ex3 = word4.substring(15,17);
let ex4 = word4.substring(18,20);
let ex5 = word4.substring(21,25);

let ex1l = ex1.length;
let ex2l = ex2.length;
let ex3l = ex3.length;
let ex4l = ex4.length;
let ex5l = ex5.length;

console.log ("First Word = " + ex1 + ", With Length = " + ex1l );
console.log ("Second Word = " + ex2 + ", With Length = " + ex2l );
console.log ("Third Word = " + ex3 + ", With Length = " + ex3l );
console.log ("Fourth Word = " + ex4 + ", With Length = " + ex4l );
console.log ("Fifth Word = " + ex5 + ",With Length = " + ex5l );