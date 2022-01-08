function AddRightDigit(D,K){
    if ((K>0)&&(D>0)&&(D<10)){
let n
let i=0
let m=K
       while (K>0) {
            console.log (K % 10);//выводим остачу от деления на 10
            n=K%10
            K = (K-K%10)/10
            
            ++i
            }
            let t
            t=Math.pow(10,i)
            K=D*t+m
            console.log('K=',K)  
       
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