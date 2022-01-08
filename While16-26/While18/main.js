let N = prompt('Введите N>0','N');
let sum=0
let n
let i=0
while (N>0) {
    console.log (N % 10);//выводим остачу от деления на 10
    n=N%10
    N = (N-N%10)/10
    sum=sum+n
    ++i
    
}
console.log('сумма цифр='+sum)
console.log('количество цифр='+i)