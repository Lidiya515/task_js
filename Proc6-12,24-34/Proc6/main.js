function DigitCountSum(){
    let K = prompt('Введите K>0','K')
    let S=0
    let n
    let C=0
    while (K>0) {
    console.log (K % 10);//выводим остачу от деления на 10
    n=K%10
    K = (K-K%10)/10
    S=S+n
    ++C
    
}
console.log('сумма цифр='+S)
console.log('количество цифр='+C)
    
}

for (let i=1; i<=5; i++){
   
    DigitCountSum()
}










