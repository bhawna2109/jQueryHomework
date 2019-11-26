$("#ch3form").submit(function(event){
    if ( $("input:checked").length >= 2){
        return;
    }
    console.log($("input:checked").length);
    alert("You must pick a class standing and a fruit");
    event.preventDefault();
})


// ch3form.onsubmit = function() {
//     var fruit = 
//     document.querySelectorAll('input[name="fruit"]')


//     for (let i = 0; i < fruit.length;i++){
//         if (fruit[i].checked)
//             return true;
//     }

//     alert("You must pick a fruit!")
//     return false;





//     // Advanced Answer
//     // if(document.querySelector('input[name="fruit"]:checked'))
//     //     return true;
    
//     // alert("You must pick a fruit!")
//     // return false;
//   }