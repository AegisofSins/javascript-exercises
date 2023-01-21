//Fibonacci sequence = Xn+2= Xn+1 + Xn
//Create an array using 

const fibonacci = function(index) {
    let number = parseInt(index, 10);
    if (number < 0 ) return ("OOPS")

//The sequenece
    let fib = [0,1]; 
    for(let i = 0; i < 30-2; i++){ 
        fib.push(fib[i]+fib[i+1]); 
    }
    return fib[number];

};

// Do not edit below this line
module.exports = fibonacci;
