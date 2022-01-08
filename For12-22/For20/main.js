let n,x,p
p=1
n=+prompt('Введите N=')
if (n<=0){
    alert('Введите число больше 0')
    n=+prompt('Введите N=')
}else{

let Rez=0

for(let i=1; i<=n; i++){
   
   p=p*i
    Rez=Rez+p
    
     console.log(p)
     
    
}
console.log('Сумма=',Rez)

}




