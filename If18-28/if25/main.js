let x = -1;

function func(x){
    if((x < -2) || (x > 2)){
        return (2*x);
    }else{
        return (-3*x);
    };
};

console.log(func(x));