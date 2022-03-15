// My Explanation/Pseudo code = the comments

 
//Times Table
const timesTable = parseInt(prompt('Enter 7 for the 7 times table:'));

//I am prompting the user to enter the times table that they want

// parsInt() method will parse this string into a number and store it to to be variable 'times-table'

 
//My for loop:

//Starting from n = 0, on the condition that n is less than or equal to 12 increment=add 1 to n

//This will make it go through the times table up to 12

//If this condition is false met the code block wont run, as the loop will terminate(due to the syntax of a for loop)

for (let n = 0; n <= 12; n++) {
  const result = n * timesTable;
  
//if 7 = timesTable then this means 0 * 7, 1 * 7... 12 * 7 end

//the answer of the multiplication will be stored in var result

console.log(`${timesTable} * ${n} = ${result}`);

//this will then display my code in the format 7 * 6 = 28

}

//that's it! :D
