function InvertDigits(){
let K = prompt('Введите K>0','K');
let n
let Rez=0
console.log('наше число',K)
while (K>0) {
    console.log (K % 10);//выводим остачу от деления на 10
    n=K%10
    Rez=Rez*10+n;
    K = (K-K%10)/10
    
}
console.log('обратное число',Rez)
}
for (let i=1; i<=5; i++){
   
    InvertDigits()
}