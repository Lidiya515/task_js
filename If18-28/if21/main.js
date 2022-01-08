let x,y

x =prompt("Введите координату рассположенную на оси Х"),
y =prompt("Введите коррдинату рассположенную на оси Y ");

// 1 способ - оператор If
if((x == 0) && (y == 0)){
   console.log(0);
}else if ((x == 0) && (y !== 0)){
   console.log(1);
}else if ((x !== 0) && (y == 0)){
   console.log(2);
}else{
   console.log(3);
}
