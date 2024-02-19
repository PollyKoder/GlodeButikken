/* Light and Dark mode */
function toggleMode() {
	const body = document.body;
	const modeToggle = document.querySelector(".mode-toggle");
	const circle = document.querySelector(".circle");

	body.classList.toggle("dark-mode");
	circle.classList.toggle("dark-mode");

	body.style.backgroundColor = body.classList.contains("dark-mode") ? "#222" : "#fff";
}

// Function to toggle between grid and list view
function toggleView() {
	const productList = document.querySelector(".divContainProducts");
	productList.classList.toggle("grid-view");
}

// Event listener for the grid/list view button
document.querySelectorAll(".grid-list-button").forEach((button) => {
	button.addEventListener("click", function () {
		toggleView();
		gridListToggle.call(button); // Pass the current button as 'this' to the function
	});
});