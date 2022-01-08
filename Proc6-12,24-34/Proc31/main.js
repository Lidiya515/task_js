let N
let n,K
let i=0
function IsPalindrome(){
   let Rez=0
    N = +prompt('Введите N>0','N');
console.log('наше число',N)
K=N
while (N>0) {
    n=N%10
    Rez=Rez*10+n;
    N = (N-N%10)/10
    
}
console.log('обратное число',Rez)
if (Rez==K){
    console.log('True')
    i++
}else{
    console.log('False')
}

}

for(let i = 0; i<5; i++){
IsPalindrome()
}
console.log('количество полиндромов=',i)