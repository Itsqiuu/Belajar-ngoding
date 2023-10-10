// while()
// for()

// dalam looping ada yang namanya arah,arah kiri dan arah kanan,arah kiri itu pengurangan ,arah kanan itu penambahan
// hati hati untuk infiniti loop atau loop yang tidak jalan

// let i = 0;
// while (i < 5){
//     console.log (i)
//     i++
// }
// console.log("\n")
// i = 5;
// while (i > 0){
//     console.log (i)
//     i--
// }

// for(let i = 0; i <= 5; i++){
//     console.log(i)
// }
// console.log("\n")
// for(let i = 5;i >= 0; i--){
//     console.log(i)
// }
// ada yang namanya method length untuk tipe data string dan array
// method lenght mengembalikan nilai angka total jumlah huruf yang ada pada string atau total element yang ada pada array
// let nama = "yeah";

// for (let i = 0; i < nama.length; i++){
//     console.log(nama[i])
// }

let name = "buoy"

for (let i = name.length; i >= 0; i-- ){
    console.log(name[i])
}

// pada tipe data string atau array di java script ada yang namanya indexing
// dimana index itu sudah pasti berawal dari nol
// let nama = "Freixa"
// console.log(nama[0]+nama[6])

// misal diberikan kasus untuk membalikan kata tanpa menggunakan method reverse
// let name = "agus";
// let result = ""
// for (i = name.length - 1; i >= 0; i--){
//     result += name[i];
// }
// console.log(result)

// let name = "agus";
// let result = ""
// for (i = 0; i < name.length; i++){
//     result += name[i];
// }
// console.log(result)

//pemahaman saya,selama kondisi looping masih true,sistem akan mengeksekusi dan mengulang
// hingga kondisi looping menjadi false,disaat kondisi looping false,looping akan berhenti

// for (i = 0;i < 5;i++){
//     for(j = 0;j <5;j++){
//         console.log(1)
//     }
//     console.log("")
// }
// console.log ("selesai")

//looping itu sering bertemu dengan method length
//looping berguna agar membuat code menjadi lebih pendek
//looping itu agar membuat proses menjadi dinamis

// counter pada looping

// let i = 0; 
// while (i < 100){
//     console.log(i);
//     i+=2;
// }

//disiini kita akan belajar menggunakan if else

// let i = 0;
// disini kita akan mencari ganjil genap
// while (i < 50){
//     if (i % 2 === 0){
//         console.log(`${i} adalah genap`)
//     }
//     else {
//         console.log(`${i} adalah ganjil`)
//     }
//  i ++;
// }
// modulus operator adalah sisa bagi
//jika 3/2 maka akan bersisa 1
// jika 4/2 maka akan bersisa 0

// kita akan membuat program fizzbuzz
// for (let i = 1; i <50; i++){
//     if (i % 3 === 0 && i % 5 === 0){
//         console.log("fizzbuzz")
//     }
//     else if(i % 3 === 0){
//         console.log("fizz")
//     }
//     else if(i % 5 === 0){
//         console.log("buzz")
//     }
//     else{
//         console.log(i)
//     }
// }

//pada loooping ada yang namanya break dan continue
//break membuat loop berhenti sepenuhnya
//continue membuat loop skip di iterasi tertentu

// for (let i=0; i < 30; i++){
//     if(i % 3 === 0 || i % 3 === 1){
//         continue
//     }
//     console.log(i)
// }
