let c=0
function IsSquare() {
    let k = +prompt('K =')
    if(k>0){
    console.log('k=',k)
    let a = Math.sqrt(k)

    if (a%1==0){
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
    IsSquare()
  }
  console.log('количество квадратов',c)