const container = document.querySelector(".container")
const row = document.querySelector(".row")
let chosenColor = ""
const pixel = document.querySelectorAll(".pixel")
const gridArea = document.querySelector(".gridArea")
const colors = document.querySelector(".colors")
let pixels = document.getElementsByClassName("pixels")

// pixel grid
for (let i = 0; i < 484; i++) {
	let div = document.createElement("div")
	gridArea.appendChild(row)
	row.appendChild(div)
	div.classList.add("pixels")
}
// grab palette color
for (let i = 0; i < pixel.length; i++) {
	pixel[i].addEventListener("click", function(e){
		chosenColor = e.target.classList[1]
		// console.log(e.target.classList[1])
	})
}
// fill pixels with chosenColor
for (let i = 0; i < pixels.length; i++) {
	pixels[i].addEventListener("click", function(e){
		event.target.style.backgroundColor = chosenColor
	})
}
