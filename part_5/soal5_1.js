// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), 
// yaitu nama dan peran. Variabel peran harus memiliki isi data, 
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// bila peran kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. 
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel 
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
//ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
//halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
//halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
//halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
//tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
//tips belajar penggunaan `` (backtick) pada javascript agar
//mudah dalam memasukan variabel ke dalam string
//tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// algoritma
// 1.pemain mengisi nama dan peran nya
// 2.lalu sistem akan cek nama dan peran nya
// 3.jika nama kosong maka pemain diberitahukan untuk mengisi nama
// 4.jika peran kosong pemain diberitahukan untuk menmilih lalu mengisi peran
// 5.jika pemain tidak mengisi nama dan peran nya maka sistem akan menanyakan pemain untuk kesediaan bermain
// 6.jika nama dan peran sudah diisi sistem akan menunjukan nama dan peran serta tugas dari peran yang diambil
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)


//code disini gunakan console.log untuk outputnya
console.log("selamat datang di proxytia,silahkan isi nama dan pilih salah satu dari peran berikut\n1.Ksatria\n2.Tabib\n3.Penyihir")

let nama = "Freixa", peran = "Penyihir";

peran = peran.toLowerCase();

if(nama.length == 0 && peran.length == 0){
    console.log("\nMau main ga sih!")
}
else if (nama.length == 0){
    console.log("\nNama wajib diisi!")
}
else if (peran.length == 0){
    console.log("\nPilih peranmu untuk memulai game!")
}
else if(peran === "ksatria"){
    const teks1 = `\nHalo Ksatria ${nama},kamu dapat menyerang dengan senjatamu`
    console.log(teks1)
}
else if(peran === "tabib"){ 
    const teks2 =`\nHalo Tabib ${nama},kamu dapat membantu temanmu yang teruka`;
    console.log(teks2)
}
else if(peran === "penyihir"){
    const teks3 =`\nHalo Penyihir ${nama},ciptakan keajaiban yang membantu kemenanganmu`
    console.log(teks3)
}
else{console.log("\nIsi peran mu dengan sesuai dengan pilihan yang diberikan")}
