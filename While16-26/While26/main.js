let N,F,F1,F2
N=prompt('Введите число Фибоначчи')
F1=1
F2=1
F=0
while(F<N){
    F=F2+F1
    F2=F1
    F1=F

}
console.log('предыдущий элемент =',F+F2-F1)
console.log('наш элемент =',N)
console.log('следующий элемент =',F1+F2)
