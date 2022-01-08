function AddRightDigit(D,K){
    if ((K>0)&&(D>0)&&(D<10)){

    
K=K*10+D
console.log(K)   
}else{
    alert('Вы ввели не допустимое значение')
} 
}
let K,D1,D2
K=+prompt('Введите K>0','K')
D1=+prompt('Введите 0<D1<10','D1') 
AddRightDigit(D1,K)
D2=+prompt('Введите 0<D2<10','D2')
AddRightDigit(D2,K)