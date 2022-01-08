function DigitCount(){
    let K = prompt('Введите K>0','K')
    console.log('K=',K)
    let c=0
while (K>0) {
    K = (K-K%10)/10
    ++c
}
console.log('количество цифр',c)
}
for(let i = 1; i<=5; i++){
    
    DigitCount()
  }
 
