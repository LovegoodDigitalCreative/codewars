function tickets(peopleInLine){

  var cashFloat25 = 0;
  var cashFloat50 = 0;

  for (var i = 0; i < peopleInLine.length; i++) {

    if (peopleInLine[i] === 25) {
      // if i get handed a 25 i have 1 more 25 and i need to give no change
      cashFloat25 = cashFloat25 + 1;
    } else if (peopleInLine[i] === 50) {
      // if i get handed a 50 i have one less 25 as i gave it as change
      cashFloat25 = cashFloat25 - 1;
      cashFloat50 = cashFloat50 + 1;
      if (cashFloat25 < 0) {
        // return "NO";
        console.log("NO");
        return;
      };
    } else {
      // 100 notes
      // if I get handed a 100 note I either
      if ((cashFloat25 - 1) >= 0 && (cashFloat50 - 1) >= 0) {
        // lose 1 of each
        cashFloat25 = cashFloat25 - 1;
        cashFloat50 = cashFloat50 - 1;
        } else if ((cashFloat25 - 3) >= 0) {
          // lose 3 25
        cashFloat25 = cashFloat25 - 3;
        } else {
          // return "NO";
          console.log("NO");
          return;
      };


    };
  }; // loop ends, adding and minusing done

  if (cashFloat25 >= 0 && cashFloat50 >= 0) {
    // return "YES";
    console.log("YES");
  };

};

tickets([25,25,50,100,25,25,25,100]);
