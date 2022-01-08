let A,Rez,N
A=+prompt('Введите A=')
N=+prompt('Введите N=')
Rez=1
if ((N<=0) || (A<=0)){
    alert('Введите число больше 0')
    A=+prompt('Введите число A=')
    n=+prompt('Введите степень числа N=')
}else{

for(let i=1; i<=N; i++){
    Rez=Rez*A
    console.log(Rez)
}
}







