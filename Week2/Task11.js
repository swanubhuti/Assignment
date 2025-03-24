function magicFunction(num) {

    if (num === undefined) {
      return 0;
    }
 
    return function(nextNum) {
      if (nextNum === undefined) {
        return num;
      }
      return magicFunction(num + nextNum);
    };
  }
 
  console.log(magicFunction(2)(3)(4)(5)());