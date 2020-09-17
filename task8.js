const task8 = [
    [2,5,1,2,3,5,1,2,4], 
    [2,1,1,2,3,5,1,2,4], 
    [2,3,4,5],
    [2,5,5,2,3,5,1,2,4] 
]

const findFirstRecurring = arr => {
    const hash = {};
    while(arr.length) {
      const firstVal = arr.shift();
      if(hash[firstVal]){
        console.log(firstVal);
        return
      }
      hash[firstVal]= 1;
    }
  
    console.log(undefined)
};

task8.forEach(findFirstRecurring)