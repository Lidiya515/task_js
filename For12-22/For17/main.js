let A,Rez,N
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
    p=Math.pow(A,i)
    Rez=Rez+p
    console.log(p)
}
console.log('Сумма',Rez)
}