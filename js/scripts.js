
function openNav(){
	
	var x = document.getElementById("navegacao");
	
	if (x.className === "navegacao"){
		x.className += " menujs";
		document.getElementById("menu-responsivo").innerHTML = "&Cross;";
	} else{
		x.className = "navegacao";
		document.getElementById("menu-responsivo").innerHTML = "&#9776;";
	}

}