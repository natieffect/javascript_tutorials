
// object are simillar to arryas except insted of using index to access and modify thier data you can access and modify thier data through ( properties  )
    //object used for store data in structured way and can represent objects in real world object 
    // if an object have non string values java will chage them to string 
    let human = {
         'name': " ",
         'age':0,
         'father':"",
         'mother':"",
         'datebirth': "",
         'placebirth': "",
         'weight': 0,
    }

    //Accessing object properties with dot notation 
        // there is more than one way to access the data in object in java script
         // A, Dot Notation
         // B, Bracket Notation
    const humanone = human.name;      // dot notaion 
    const hunmatwo = human['name'];  // bracket notaion


    // updating object properties
        // we can update objects with 
            // dot notaion
            // brace notation 
        
            human.name = "some dude";
            human.age  = "26"
    
    // Add new properties  to a javasctipt  object
       // we can update object with
        // dot notaion
        // bracket notation
            human.brother = "";
            human['sister']  = "";
    
    // Delete properties from a javascript object
          delete human.weight;
    
    