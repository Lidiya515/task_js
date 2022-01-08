let A,Rez,N,a
A=+prompt('Введите A=')
N=+prompt('Введите N=')
let p=1
Rez=0
if ((N<=0) || (A<=0)){
    alert('Введите число больше 0')
    A=+prompt('Введите число A=')
    n=+prompt('Введите степень числа N=')
}else{

for(let i=0; i<=N; i++){
    a=Math.pow((-1), i)
    p=Math.pow(A,i)
    Rez=Rez+a*p
    console.log(a*p)
}
console.log('Сумма',Rez)
}