
//natural language

//1. CREATE A LIMIT OF 362 
//2. use a for loop ( NUMOF_SQUARE_NUMBERS) to find all the square numbers (multiply the number by iteslf until 362 000)
//3. NUMOF_SQUARE_NUMBERS check if its odd using (number % 2 !== 0)
//4. if its true , thenadd it to a variable called Add_Odd


function NUMOF_SQUARE_NUMBERS() {
let Add_Odd=0;
let numberofsquares=1

for (; numberofsquares*numberofsquares <= 362000 ; numberofsquares++) {
if (numberofsquares % 2 !== 0 ) {  //if the number of squares (remainder) does NOT equal zero 0 its odd
     Add_Odd = Add_Odd +(numberofsquares * numberofsquares) ; // while the number of square is still less than 362000 add those squares       
}

}
return Add_Odd // the reason we return  Add_odd is because we are going to use it outside the function
}

console.log(NUMOF_SQUARE_NUMBERS())