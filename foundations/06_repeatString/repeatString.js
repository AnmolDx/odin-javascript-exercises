const repeatString = function(str, num) {
   let fstr = "";
   if(num < 0){
      return "ERROR"
   } 
   else {
      for(let i = 0; i < num; i++)
      fstr = fstr+str
   }
   return fstr
};

// Do not edit below this line
module.exports = repeatString;
