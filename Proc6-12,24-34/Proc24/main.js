let c=0
function Even() {
    let k = +prompt('K =')
    if(k>0){
    console.log('k=',k)
    if (k%2==0){
       ++c
    console.log('true')
}
else {
    console.log('false')
}
}
else{
    alert('Введите K>0')
}
}
for(let i = 1; i<=10; i++){
    Even()
  }
  console.log('количество чётных чисел',c)