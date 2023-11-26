
//  java sctipt can generate random decimal values 

    // random decimal no b/n  0(inclusive) and 1(exclusive)
    // math.random() ----> returns 0 but never 1

    let random_number  = Math.random();

//  Generate random whole number with javasctipt

    // to give whole number with in specific range we can use difrent methods 
    // Math.floor(Math.random() *10 ) ----> create random number b/n 0 to 9

    let random_number_10 = Math.floor(Math.random() * 10);

//   Generate random number with in range

     // to create whole number with in max and min range 
     // Math.floor( Math.random() * ( max - min +1)) + min ---> create random with 

     let max =  10;
     let min = 2;

     let range_number = Math.floor( Math.random() * (max-min+1)) + min;

     
