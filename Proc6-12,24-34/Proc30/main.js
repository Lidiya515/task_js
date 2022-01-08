let K,n
function DigitN(){
    console.log(K)
    
    if (K!=0){
        let DigitN=K%10
        
        DigitN=Math.floor(DigitN)  //округление вниз
        console.log(DigitN)
    }else{
        DigitN=-1
        console.log(DigitN)
    }
    

}
    for(let i = 0; i<5; i++){
        K=prompt('K=')
        K=K/(Math.pow(10,i))
    DigitN()
}
