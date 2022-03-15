//Quarter Years my attempt-not complete
const chooseMonth = parseInt(prompt('Choose a month'));

for (let n = 1; n <= 12; n++) {
    if( n <= 3) {
        console.log(1)
    } else {
        if(n<= 6) {
            console.log(2)
        }
    }
}

//Solution
const quarterOf = (month) => {
  if (month <= 3) {
    return 1
  } else if (month <= 6) {
    return 2
  } else if (month <= 9) {
    return 3
  } else if (month <= 12) {
    return 4
  }
  
}
