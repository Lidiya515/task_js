let R, d=0
function RadToDag(){
    R=+prompt('R=',R)
    console.log('в градусах=',R)
    if ((R>0)&&(R<2*3.14)){
    d=R*180/3.14
    console.log('в радианах=',d.toFixed(3))
    }else{
        console.log('0<D<2П')
    }

}
for(let i = 0; i<5; i++){
    RadToDag()
    }