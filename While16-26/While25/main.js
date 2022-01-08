let N,F,F1,F2
N=prompt('N=')
F1=1
F2=1
F=0
while(F<N){
    F=F2+F1
    F2=F1
    F1=F

}
console.log('F=',F)