let p =+prompt('Введите процент p=','')
let s = 10
let k = 1
let d = 10
if ((p<=0)||(p>=50)){
    alert('Значение может быть только в этом диапазоне 0<p<50')
    p =+prompt('Введите процент p=','')
    while (s<=200) {
        ++k
        d = d+ d * p / 100
        s =s+ d
    }
    console.log('Путь = ' + s.toFixed(0)+'км')
    console.log( k + ' дней')
}else{
while (s<=200) {
    ++k
    d = d+ d * p / 100
    s =s+ d
}
console.log('Путь = ' + s.toFixed(0)+'км')
console.log( k + ' дней')
}