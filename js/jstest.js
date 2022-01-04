$(document).ready(function(){
	$("#btn").on("click",clickhandler)
	$("#hreBtn").on("click",clickhandler2)
	
});

	
function clickhandler(e){
	console.log("adfa");
	$("#div1").load("load1.html")
	
}
function clickhandler2(e){
	console.log("123123");
}