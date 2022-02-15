var ArrowFactorial = (a) =>{
    let fat = 1

    for(let i = a; i > 1 ; i--){
        fat *= i
    }

    return fat
}

console.log(ArrowFactorial(5))