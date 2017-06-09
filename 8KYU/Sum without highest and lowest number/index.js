function sumArray(array) {
    // Sort the array into order
    array.sort(function(a, b){return a - b});

    // create stopper for length -1
    var stopper = array.length;
    stopper = stopper - 1;

    // make an empty total var
    var total = 0;

    // if these conditions are met, if not return
    if (array.length !== 0 || array !== null) {
      // loop to add array items to total each time
      for(var i=1;i<stopper;i++) {
        total = total + array[i];
      }
      console.log(total);
      return total;

    } else {
      console.log(0);
      return 0;

    };

};

sumArray([6, 2, 1, 8, 10]);
sumArray([]);
