let x = 3;

function func(x){
    if(x <= 0){
        return (-x);
    }else if ((x > 0) && (x < 2)){
        return (Math.pow(x, 2));
    }else {
        return (4);
    }
}

console.log (func(x));