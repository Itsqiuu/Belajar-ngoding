let woi = "woi";
function ntahApa() {
  //local scopenya si fungsi ntahApa
  let hello = "hello";
  if (woi = true) {
    //ini block scope
    hello = "woi wkwkw"
    console.log(hello) //ini ga akan error, ya karena var hello ada di luar scopenya
    let akanError = "hehehe";
  }
  // console.log(akanError) //ini akan error, kenapa? pahami sendiri dah wkwk

  console.log(hello) //ini ga error, soalnya log ini dan var hello berada dalam scope yang sama
  console.log(woi) //ini juga ga error, karena memanggil var woi yang berada di luar/atas/global scope
  return hello
}

console.log(ntahApa())