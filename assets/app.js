const submitBtn = document.getElementById("submit");

function submitForm(e) {
	e.preventDefault();
	alert("This works!");
}

submitBtn.addEventListener("click", submitForm);
