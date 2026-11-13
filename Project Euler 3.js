//create a variable called number = 600851475143 done
//create a variable called factornoprime (where the factor numbers are kept) = 2 done
//create a variable called prime factor ( where prime factors are kept) done
//While the varaible (factornoprime) is less than 600851475143 (for) done
// make sure that we find all the factors until 600851475143 done
// find the factors of number (600851475143) on separate function
//check if the factors are prime numbers (separate function)
// if it is a prime number assign the result to a variable called LargestPrimeFactors



let number = 600851475143
let FactorNoPrime = 2 // where we start counting from .
let PrimeFactor = 0 // if the Factor is prime we keep them in here. This variable is a temporary holding space for the next prime number before adding it to AddPrimeFactors

function Checkfactors (){   //check if the number is a factor
  for (;FactorNoPrime < number; FactorNoPrime++){
    if (number % FactorNoPrime === 0) {
      let Truefactor = FactorNoPrime // assign the factor to a varaiable to show it is a factor
    
      // we're not storing we're using Isprime to find 
      //x=y
      let IsItAPrime = Isprime(Truefactor) //calling the function (true or false) assign the answer of the isprime to the variable inside the existing checkfactors function. Stores the True or False answer
      
            if (IsItAPrime )   {              //already true or false
            let LargestPrimeFactors = Truefactor 
              } 
        
    }
  } 
}

function Isprime () { //Core Rules & Characteristics
     if (FactorNoPrime > 1) {
       if (FactorNoPrime % 2 ===0 ){
         if (FactorNoPrime < Math.sqrt(number)) 
       }
     } return true

  
}





