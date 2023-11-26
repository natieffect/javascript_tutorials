// concept that a function can be expressed in term of it self.  process of function calling it self 
    //  ( Base Condtions )it must include condtions to stop calling it self as soon as some required condtions are meet

// function name() {
//         let arrya = [1,2,3,4,4];
//         let value = 1;
//         arrya.forEach(element => {
//             value *= element;
//         });
//         console.log(value);
//     }
// name()

// // re wright the above function using recusrive functions
// let values = [1,2,3,4,4];

// function sumArray(values, n = values.length){
//     if (n <=0){
//         return 1;
//     }else{
//         return sumArray(values,n-1) * values[n-1]
//     }
// }

// console.log(sumArray(values));

let arr_val = [1];
function subOddEven(arr_val, n=arr_val.length){ // substract ---> odd - even
    if (n<=0){
         console.log("choosing value \t 0" );
         return 0;
    }else{
        if (arr_val[n-1] %2 == 0) 
        {   
             //console.log(`choosing value \t ([${arr_val}],${n-1}) - ${arr_val[n-1]}`);
             return subOddEven(arr_val,n-1) - (arr_val[n-1]);  
        } else {
             //console.log(`choosing value \t  ([${arr_val}],${n-1}) + ${arr_val[n-1]}`);
             return subOddEven(arr_val,n-1) + arr_val[n-1];
        }
    }
}
console.log(subOddEven(arr_val));