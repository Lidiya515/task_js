let N = prompt('Введите N>0','N')

while (N>0) {
    alert(N % 10);//выводим остачу от деления на 10
    console.log (N % 10);
    N = (N-N%10)/10
    
}

