function creaTabla(id_tabla) {
	var table = document.getElementById(id_tabla);
	for(i in location){
		var row=table.insertRow(-1);
		var cell1=row.insertCell(0);
		cell1.innerHTML=i;
		var cell2=row.insertCell(1);
		if (typeof location[i] === "string") {
			cell2.innerHTML=location[i];
		} else {
			cell2.innerHTML="no es imprimible";
		}
	}
}