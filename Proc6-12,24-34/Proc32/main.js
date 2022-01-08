let D, d=0
function DegToRad(){
    D=+prompt('D=',D)
    console.log('в градусах=',D)
    if ((D>0)&&(D<360)){
    d=D*3.14/180
    console.log('в радианах=',d.toFixed(3))
    }else{
        console.log('0<D<360')
    }

}
for(let i = 0; i<5; i++){
    DegToRad()
    }