var x = 2;
var y = 5;
var z = x + y;
console.log (z);
document.getElementById("add").addEventListener("click", print);

function print(){
	var input = document.getElementById("fruta").value;
	document.getElementById("lista").innerHTML += "<li>"+input+"</li>"
	document.getElementById("fruta").value = "";
}
