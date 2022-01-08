let N = +prompt('Введите N='+'')
let k=2
if (N<=1){
    console.log('не возможно определить')
}else{
if ((N==2)||(N==3)){
    console.log('true')
}else{


while ( k<N-1 ) {
    ++k
    if( (N % k) === 0 ){
    console.log('false')
    break
    }
    else {
    console.log('true')
    break
    }
}
}
}
