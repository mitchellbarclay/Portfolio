object.onmouseover = myFunction(){
	x = document.getElementById("box-description");

     if(x.style.width === "170px"){
     	x.style.width = "0px"
     }
     else{
     	x.style.width = "170px"
     }

}