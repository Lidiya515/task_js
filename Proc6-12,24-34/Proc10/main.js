function Swap(X,Y){
    if((X>=0) &&(Y>=0)){

    
    X=X+Y
    Y=X-Y
    X=X-Y

    console.log(X,Y/10)
    }else{
        alert('Введите число >0')
    }
}
let A,B,C,D
A=prompt('A=')
B=prompt('B=')
C=prompt('C=')
D=prompt('D=')
console.log('Введённые элементы',A,B,C,D)
Swap(A,B)
Swap(C,D)
Swap(B,C)

