let n,x,p
p=0
n=+prompt('Введите N=')
if (n<=0){
    alert('Введите число больше 0')
    n=+prompt('Введите N=')
}else{


let rounded = function(number){
    return +number.toFixed(4);//округление вверх до 4го знака
}

for(let i=1; i<=n; i++){
   let Rez=0
    Rez=Rez+(2*i-1)
     console.log(Rez)
     p=p+Rez
    
}

console.log('cумма=',rounded(p))
}