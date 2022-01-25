let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
		        
        let newdiv = document.createElement('div');
        document.body.appendChild(newdiv);
        newdiv.style.background = "yellow";
        newdiv.innerHTML = "Hello World";

        
});


