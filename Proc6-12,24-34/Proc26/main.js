let c=0
function IsPower5() {
    let k = +prompt('K =')
    if(k>1){
    console.log('k=',k)
while ((k > 0) && ((k % 5) == 0)) {
    k=k/5

}
    if (k==1){
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
    IsPower5()
  }
  console.log('количество элементов которые являються степенью числа 5=',c)
