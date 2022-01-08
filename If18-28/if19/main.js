let a = 2
let b = 1
let c = 1
let d = 1

if ((a == b) && (a == c)){
    console.log(4);
}else if ((b == c) && (b == d)){
    console.log(1);
}else if((c == d) && (c == a)){
    console.log(2);
}else {
    console.log(3);
}