//Find the sum of all the multiples of 3 or 5 below 1000.

//natural langauge
//1. initialise the numofmultiple to 1 done
//2. if nuofmultiples is less than 1000 we good done 
//3. while its still less than 1000 find the multiples of 3 or 5 
//4.add the variable multiples ( where the multiples of 3 and 5 will go)
//4. Use MOD  numofmultiples % 3 == 0 true add numofmultiples to multiples



function Findmultiplesof (){

    let numofmultiple = 1;
  let mutliples = 0; // this has to be above the loop to initialise otherwise it will be reset
    for (;numofmultiple < 1000; numofmultiple++){
        
        if (numofmultiple % 3 == 0 || numofmultiple % 5==0) {
            mutliples = mutliples + numofmultiple
        }

    }

 return(mutliples) // return is after the loop not inside the loop . note the input , initialisation and the output are done outside the lop
}

console.log(Findmultiplesof())