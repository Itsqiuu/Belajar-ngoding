// let nilai = 100
// nilai = 90

// console.log(nilai >=50)
// if (nilai >= 70 )//nilai didalam kondisi ini bernilai true atau false
// {console.log("anda lulus")} 

// else if(nilai >= 40 )
// {console.log("tidak lulus")}

// else{console.log("tidak lulus pakai banget")}
// console.log(nilai)

let nilai =50;

if (nilai >= 80 && nilai <= 100){nilai = "A";}
else if (nilai <80 && nilai>= 70){nilai = "B";}
else if (nilai <70 && nilai >= 60){nilai = "c";}
else{nilai="D"}

console.log(nilai)

// && (and)semua kondisi harus terpenuhi dan akan menghasilkan nilai true
// || (or)hanya perlu salah satu kondisi terpenuhhi dan akan menghasilkan nilai true
nilai = 50;

let banding = nilai > 80 && nilai <= 100;
console .log (banding, "&&")
let banding2 = nilai > 80 || nilai <= 100;
console .log (banding2, "||")
let banding3 = nilai != 51;
console.log(banding3)

// apa perbedaan == dan ====

let x = 50;
let y = "50";

let banding4 = x == y;
console.log(banding4,"(banding 4)");
let banding5 = x === y;
console.log (banding5,"(banding 5)");

// if else ini bisa kita buat bersarang
let number = 7;

if (number > 5){
    if (number % 2 == 0){
        console.log("lebih besar dari 5 dan genap")
    } else {
        console.log("lebih besar dari 5 dan ganjil")
    }
}else {
    if (number % 2 == 0){
        console.log ("lebih kecil dari 5 dan genap")
    } else {
        console.log ("lebih kecil dari 5 dan ganjil")
    }
}

// if( number >5 && number % 2 == 0){
//     console.log("lebih besar dari 5 dan genap")
// }
// else if ( number >5 && number % 2 != 0){
//     console.log("lebih besar dari 5 dan ganjil")
// }