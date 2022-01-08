let x1,y1,x2,y2,x,y;

x1=prompt('Введите 1 координату 1 клетки шахматной доски:')
if (x1>8){
    alert('значение не должно превышать 8')
    x1=prompt('Введите 1 координату 1 клетки шахматной доски:')
    console.log(x1)
} else
console.log(x1)
y1=prompt('Введите 2 координату 1 клетки шахматной доски:')
if (y1>8){
    alert('значение не должно превышать 8')
    y1=prompt('Введите 2 координату 1 клетки шахматной доски:')
    console.log(y1)
} else
console.log(y1)
x2=prompt('Введите 1 координату 2 клетки шахматной доски:')
if (x2>8){
    alert('значение не должно превышать 8')
    x2=prompt('Введите 1 координату 2 клетки шахматной доски:')
    console.log(x2)
} else
console.log(x2)
y2=prompt('Введите 2 координату 2 клетки шахматной доски:')
if (y2>8){
    alert('значение не должно превышать 8')
    y2=prompt('Введите 2 координату 2 клетки шахматной доски:')
    console.log(y2)
} else
console.log(y2)
x=x1-x2;
y=y1-y2;
console.log(x,y)

 

if  ((x==y) || (x==-1*y) || (x1==x2) || (y1==y2)) {
    console.log('True')
    alert('True')
}else{
    console.log('False')
    alert('False')
}