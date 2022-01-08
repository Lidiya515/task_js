let  x,y

x=+prompt('введите х')
function func(){
    if(x > 0){
        y=2*Math.sin(x)
        console.log( y)
    }else{
        let y = 6-x
        console.log(y)
    }
}
func()