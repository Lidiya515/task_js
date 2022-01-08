let a,b 
a=+prompt('Введите чило А',' ')
b=+prompt('Введите чило B',' ')
console.log('a=',a)
console.log('b=',b)
while ((a != 0) && (b != 0)){
    if (a > b){
        a = a % b
    }else{
        b = b % a
}

}
console.log('НОД(a,b)=',a + b)






