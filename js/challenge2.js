$("#useBilling").change(function(){
	console.log("hi");
	if(this.checked){
		$("#home").val($("#billing").val());
		home.disabled = true;
	}
	else{
		$("#home").val("");
		home.disabled = false;
	}
}
)

// useBilling.onchange = function() {
// 	let home = document.querySelector("#home");
// 	let billing = document.querySelector("#billing");

// 	if (this.checked){
// 		home.value = billing.value;
// 		home.disabled = true;}
// 	else {
// 		home.value = "";
// 		home.disabled = false;}
	
// 	}
