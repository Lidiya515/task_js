let x,y
x =prompt("Введите точку координата на оси х"),
y =prompt("Введите точку координата на оси y");
if ((x==0)||(y==0)){
    console.log("Введите координаты не лежащие на координатных осях OX или OY")
    }else {
        if((x > 0) && (y > 0)){
            console.log("Номер координатной четверти 1");
            }else if ((x < 0) && (y > 0)){
            console.log("Номер координатной четверти 2");
            }else if ((x < 0) && (y < 0)){
            console.log("Номер координатной четверти 3");
            }else if ((x > 0) && (y < 0)){
            console.log("Номер координатной четверти 4");
            }
    }

