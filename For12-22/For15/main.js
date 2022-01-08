let n,p,a
p=1
a=+prompt('Введите а=')
n=+prompt('Введите n=')
if (n<=0){
    alert('Введите число больше 0')
    n=+prompt('Введите N=')
}else{


let rounded = function(number){
    return +number.toFixed(4);//округление вверх до 4го знака
}

for(let i=0; i<=n; i++){
     p=Math.pow(a,i)
  
}

console.log(rounded(p))
}