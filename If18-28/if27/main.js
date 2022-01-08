let x = (0.5)
let y = Math.floor(x)

function func(y){

    if(y < 0){
        return (0);
    }else if(y % 2 == 0){
        return (1);
    }else{
        return (-1);
    };
};
console.log (func(y));