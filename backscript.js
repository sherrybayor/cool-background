var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color3 = document.querySelector(".color3");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var radial = document.querySelector(".radial");
var radial = document.getElementById("radial");
var linear = document.getElementById("linear");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color3.value
	+ ","
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}
function setRadial() {
	body.style.background = 
	"radial-gradient(farthest-corner, " 
	+ color1.value 
	+ ", " 
	+ color3.value
	+ ","
	+ color2.value 
	+ ")";

}
color1.addEventListener("input", setGradient);
color3.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
radial.addEventListener("click", setRadial);
linear.addEventListener("click", setGradient)
