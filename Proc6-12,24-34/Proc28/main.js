let c=0
let a=0
function IsPrime() {
    let k=2
if ((N==2)||(N==3)){
    ++a
    console.log('true')
}else{
    if(N>1){
    while ( k<N-1 ) {
    
    ++k
    if( (N % k) === 0 ){
    console.log('false')
    break
    }
    else {
        ++c
    console.log('true')
    break
    }
}
}else{
    alert('Введите N>0')
}
}
}
let N

for(let i = 1; i<=10; i++){
    N=prompt('Введите число N=')
    console.log('N=',N)
    IsPrime()
  }
  console.log('количество простых чисел =',c+a)
