let n,x,p
p=1
function Fact(){
n=+prompt('Введите N=')
if (n<=0){
    alert('Введите число больше 0')
    n=+prompt('Введите N=')
}else{


let rounded = function(number){
    return +number.toFixed(4);//округление вверх до 4го знака
}

for(let i=0; i<n; i++){
   let Rez=0
    Rez=i+1
     p=p*Rez
    
}

console.log(`${n}`+ '!=',rounded(p))
}
}
for(let i = 0; i<5; i++){
    Fact()
    }