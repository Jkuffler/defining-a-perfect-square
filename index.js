var isPerfectSquare = function(num) {
  return num ** 0.5 === parseInt(num ** 0.5) //refactored
  //what parseInt is doing
  // let i = 1;
  //   while(num>0) {
  //   num -= i;
  //   i+=2
  //   }
  // return num===0 /*what we want from while*/
};

