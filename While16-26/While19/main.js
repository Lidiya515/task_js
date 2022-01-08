let N = prompt('Введите N>0','N');
let n
let Rez=0
console.log('наше число',N)
while (N>0) {
    console.log (N % 10);//выводим остачу от деления на 10
    n=N%10
    Rez=Rez*10+n;
    N = (N-N%10)/10
    
}
console.log('обратное число',Rez)