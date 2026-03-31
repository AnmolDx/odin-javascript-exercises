const removeFromArray = function(arr, ...elements) {
   let newArr = [];
   arr.forEach((item) =>{
      if(!elements.includes(item)){
         newArr.push(item)
      }
   })
   return newArr
};

// Do not edit below this line
module.exports = removeFromArray;
