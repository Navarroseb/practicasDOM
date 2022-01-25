let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let newli = document.createElement('li');
        document.body.appendChild(newli);
        newli.innerHTML = "Fourth Element";


});
