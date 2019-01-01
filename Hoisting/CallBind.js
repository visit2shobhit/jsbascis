// Call , Bind , Apply
// They are used for Method Borrowing and they allow us to set this varriable explicitly.

var obj = {
    name : 'Shobhit',
    age : '31',
    gender : 'Male',
    presentation : function GetInformation(desg,compname){
        if(desg == 'Development Specialist'){
            console.log('Your Age is '+this.age+' and Current CTC is 934000 and your company name is '+compname);
        }
        else if(desg == 'Senior Development Specialist'){
            console.log('Your Age is '+this.age+' and Current is 1145000 and your company name is '+compname);
        }
    }
}

// Simple Way
obj.presentation('Development Specialist','TCS');

// Now if we want to use the presentation function for another object then again i have to create the object. 
// and write the function.. Here the concept of call function came WHERE WE CAN BORROW THE METHOD FROM AN OBJECT.
// TWO PARAMETER WILL PASSED IN THE FUNCTION 
// PARAMETER 1 : this varriable : The first parameter will be replaced by this varriable in borrowed function.
// PARAMETER 2 : The second parameter will be the parameter which is required for called function.

var neha = {
    name : 'Neha',
    age : '28',
    gender : 'Female'
}

obj.presentation.call(neha,'Senior Development Specialist','INFOSYS');

// neha will be repalced by this parameter in parent function

                                             //APPLY METHOD//

// APPLY FUNCTION : THIS IS SAME AS CALL But the only difference is it accept second parameter as an ARRAY

// obj.presentation.call(neha,['Senior Development Specialist']);

                                            //BIND METHOD(Rember Keyword : COPY of function and Preset Argument)// 

// Bind is similar to CALL Method but the difference is it allow us to  create a copy of function with preset argument and it always return the function
 var newFunction = obj.presentation.bind(neha,'Development Specialist');

 newFunction('Tech Mahindra');