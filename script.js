const button = document.getElementById("btn");
const select = document.getElementById("colorSelect");

button.addEventListener("click", (e) => {
	if(e.target === "SELECT"){
		console.log(e.target);
	}
})
