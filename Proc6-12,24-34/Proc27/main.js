let c=0
function IsPowerN() {
    let k = +prompt('K =')
    if(k>1){
    console.log('k=',k)
while ((k > 0) && ((k % n) == 0)) {
    k=k/n

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
let n
n=prompt('Введите число N=')
for(let i = 1; i<=10; i++){
    IsPowerN()
  }
  console.log('количество элементов которые являються степенью числа',`${n}`,'=',c)
