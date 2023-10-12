let luas = 5
for (let i = 0;i < luas;i++){
    let petak =""
    for (let j = 5;j > i;j--){
       petak += " "
    }
    for (let k = 0;k  < i*2-1 ;k++){
        petak += "*"
    }

console.log (petak)
}