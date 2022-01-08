let N = prompt('Введите N>0','N');
let n

console.log('наше число',N)
while (N>0) {
    console.log (N % 10);//выводим остачу от деления на 10
    n=N%10
    N = (N-N%10)/10
    if (n%2==1){
        console.log('True')
       break
    
    }else{
        console.log('False')
    }
    
}
