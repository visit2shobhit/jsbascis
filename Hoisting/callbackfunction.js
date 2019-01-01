// Call Back Function : These Functions can be called directly. A function which is called by other function is called Call Back Function

function btn(){
    console.log('Clicked on Button');
}

<div class = "dice"></div>

// btn(); // This is not the case of callback function.
document.querySelector('.dice').addEventListener('click',btn); // btn() function called through addEventListner() Method.