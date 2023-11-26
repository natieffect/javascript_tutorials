
//in java sctipt statment compare value to vast case statment 
    let switchcompare = 2;
    switch(switchcompare){
        case 2:
            console.log(" if swirch compare value is 2 is executed");
            break;
        case 3:
            console.log(" this is executed if the  sirch compare value is 2");
            break;
        default:
            console.log( " This is executed if the default value is reached");
    }

    // Multiple identical options in Switch options
     // if the break statment is omited from the switch statment case are executed until the break is encoutered 
     let switchvaluetwo = 2;
     switch(switchvaluetwo)
     {
         case 1:
         case 2:
         case 4:
            result = "executing for the case 1,2,4";
            break;
     }