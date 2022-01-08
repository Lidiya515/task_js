function SortInc3(A,B,C){
if ((A>B)&&(A>C)){
    
    if (B>C){
        console.log(C,B,A)
    }else{
        console.log(B,C,A)
}}
if((B>A)&&(B>C)){
    if (A>C){
        console.log(C,A,B)
    }else{
        console.log(A,C,B)
    }

}
if((C>A)&&(C>B)){
    if (B>A){
        console.log(A,B,C)
    }else{
        console.log(B,A,C)
}
}
}
let A1,A2,B1,B2,C1,C2
A1=+prompt('A1=')
B1=+prompt('B1=')
C1=+prompt('C1=')
console.log('1е введённые нами элементы',A1,B1,C1)
SortInc3(A1,B1,C1)
A2=+prompt('A2=')
B2=+prompt('B2=')
C2=+prompt('C2=')
console.log('2е введённые нами элементы',A2,B2,C2)
SortInc3(A2,B2,C2)

