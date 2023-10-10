// // function bisa digunakan untuk membuat proses yang bisa dipanggil berulang kali
// function helloworld(){
//     return "Hello World"
// }
// console.log (helloworld)

// function test(){
//     console.log("Test")
// }
// console.log (test())

// // return memberikan nilai ke fungsi
// // bila tidak memberikan return ke fungsi maka fungsi tersebut bernilai undefined

// let hello = helloworld();
// let hell1 = "Hello World";

// console.log (hello)

// // kita bisa menambahkan parameter disini sesuai kebutuhan  
// function tambahangka(angka1,angka2){
//     return angka1 + angka2;
// }
// console.log (tambahangka(1,2))
// console.log (tambahangka(2,2))
// console.log (tambahangka(1,3))
// console.log (tambahangka(4,2))

// let angkalima = tambahangka(2,3);
// console.log (angkalima)
// console.log("")

// function balikkata(kata){
//     let balikkata = "";
//     for (let i = kata.length - 1; i >= 0; i--){
//         balikkata += kata[i];
//     }
//     return balikkata
// }

// console.log(balikkata("kucing"))
// console.log(balikkata("gajah"))
// console.log(balikkata("harimau"))
// console.log(balikkata("jawi"))

function uppercase(kata){
    let result="";
    for (let i = 0; i < kata.length; i++){
        if ((i == 0 || kata [i - 1] === " ")){
        result += kata[i].toUpperCase();
        }else{
            result += kata[i]
        }
    }
    return result;
}

console.log(uppercase("tak segampang itu"))
console.log(uppercase("ku mencari penggantimu"))
console.log(uppercase("tak segampang itu"))
console.log(uppercase("ke menemukan sosok seperti dirimu"))
