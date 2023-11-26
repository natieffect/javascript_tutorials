// in javascript we can concatinate string variable to create onother string variable 
    // concatinaeion does not add spaces b/n concatinated string we need to add them out self
    let variableone = 'first string';
    let vatiabletwo  = ' second string';
    let variablethree = variableone + vatiabletwo;


// find the lengh of string 
    // we can find the length of string by writing ( .lenght ) after string
    let variablefour  = variableone.length;

// Use bracket notaion to find the caracters in string
    // Bracket notaion is way to get character at specific index within string
    let variablefive = variableone[ 0 ];
        // use the bracket notion to find the nth value of  ( Nth from  the last character )
            // get the third element  from the last 
         let nthfromLast = variableone[variableone.length  - 3]

// understading string Immutablity
    // string values can not be altered once created 
    variablefive[1] = " s ";   // creates error because it can not ve altered 