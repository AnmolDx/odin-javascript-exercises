const fibonacci = function(num) {
    let n
    if(typeof num !== "number"){
        n = parseInt(num)
    }else{
        n = num
    }
    if(n < 0){
        return "OOPS"
    }
    if(n == 0) return 0

    let a = 1;
    let b = 0

    for(let i = 2; i<= n; i++){
        let curr = a + b;
        b = a;
        a = curr
    }

    return a

};

// Do not edit below this line
module.exports = fibonacci;
