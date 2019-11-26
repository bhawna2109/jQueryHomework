$("#ch4form").submit(function(event){

    if($("#fullname").val() == ""){
        $("#nameerrormsg").css("display", "block");
        event.preventDefault();
    }
    else{
        $("#nameerrormsg").css("display", "none");
    }

    if($("#streetaddr").val() == ""){
        $("#addrerrormsg").css("display", "block");
        event.preventDefault();
    }
    else{
        $("#addrerrormsg").css("display", "none");
    }
    return;

})


// ch4form.onsubmit = function() {
//     var validInput = true;
//     var name = document.querySelector("#fullname")
//     var address = document.querySelector("#streetaddr")
  
//     if (name.value.length == 0){
//         document.querySelector("#nameerrormsg").style.display = "block"; 
//         validInput = false;
//     }
//     else {
//         document.querySelector("#nameerrormsg").style.display = "none";
//     }

//     if (address.value.length == 0){
//         document.querySelector("#addrerrormsg").style.display = "block"; 
//         validInput = false;
//     }
//     else {
//         document.querySelector("#addrerrormsg").style.display = "none"; 
//     }

//     return validInput;
// }