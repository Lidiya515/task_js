let n,x,p,X
p=1
X=+prompt('Введите X=')
console.log('X='+X)
n=+prompt('Введите N=')
console.log('N='+n)

if (n<=0){
    alert('Введите число больше 0')
    n=+prompt('Введите N=')
}else{

let Rez=1

for(let i=1; i<=n; i++){
   x=Math.pow(X,i)
   p=p*i
    Rez=Rez+x/p
    console.log('x^'+`${i}`+'='+x)
     console.log(`${i}`+'!='+p)
     
    
}
console.log('Сумма=',Rez)

}