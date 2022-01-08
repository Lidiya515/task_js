let n,x,p
p=1
n=+prompt('Введите N=')
if (n<=0){
    alert('Введите число больше 0')
    n=+prompt('Введите N=')
}else{


let rounded = function(number){
    return +number.toFixed(4);//округление вверх до 4го знака
}

for(let i=0; i<n; i++){
     x=1.1+0.1*i
    x=Math.round(parseFloat(x) * 10) / 10 //округление вниз
    console.log(x)
    p=p*x
    
}

console.log(rounded(p))
}