document.getElementById("add").addEventListener("click", print);

function print(){
	var input = document.getElementById("fruta").value;
	document.getElementById("lista").innerHTML += "<li>"+input+"</li>"
	document.getElementById("fruta").value = "";
}
