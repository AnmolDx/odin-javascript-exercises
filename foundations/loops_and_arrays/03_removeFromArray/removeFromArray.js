const removeFromArray = function(arr, ...others) {
    // let filteredArr = arr.filter((num) => {
    //     for(let other of others){
    //         return num !== other
    //     }
    // })

    let filteredArr = []

    for(let item of arr){
        if(!(others.includes(item))){
            filteredArr.push(item)
        }
    }
    return filteredArr
};

// Do not edit below this line
module.exports = removeFromArray;
