// var form = document.getElementById("form");

// form.addEventListener("submit", function (e) {
//     e.preventDefault();

//     var fname = form.elements["fname"].value;
//     var lname = form.elements["lname"].value;
//     var pnumber = form.elements["number"].value;
//     var email = form.elements["email"].value;
//     var dob = form.elements["dob"].value;
//     var doa = form.elements["doa"].value;
//     var toa = form.elements["toa"].value;
//     var ds = form.elements["ds"].value;
//     var q1 = form.elements["q1"].value;
//     var q2 = form.elements["q2"].value;
//     var q3 = form.elements["q3"].value;

//     var formData = {
//         fname,
//         lname,
//         pnumber,
//         email,
//         dob,
//         doa,
//         toa,
//         ds,
//         q1,
//         q2,
//         q3

//     }

//     console.log(formData)
//     var store = JSON.stringify(formData)
//     console.log(store)
// })







function showMessage(input, message, type) {
	// get the small element and set the message
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	// update the class for the input
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}

function validateName(input, requiredMsg, invalidMsg) {
	// check if the value is not empty
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
	// validate email format
	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const email = input.value.trim();
	if (!emailRegex.test(email)) {
		return showError(input, invalidMsg);
	}
	return true;
}

function validateEmail(input, requiredMsg, invalidMsg) {
	// check if the value is not empty
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
	// validate email format
	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const email = input.value.trim();
	if (!emailRegex.test(email)) {
		return showError(input, invalidMsg);
	}
	return true;
}

const form = document.querySelector("#signup");
const NAME_REQUIRED = "Please enter your name";
const EMAIL_REQUIRED = "Please enter your email";
const EMAIL_INVALID = "Please enter a correct email address format";

form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();

	// validate the form
	let nameValid = hasValue(form.elements["name"], NAME_REQUIRED);
	let emailValid = validateEmail(form.elements["email"], EMAIL_REQUIRED, EMAIL_INVALID);
	// if valid, submit the form.
	if (nameValid && emailValid) {
		alert("Demo only. No form was posted.");
	}

	let loginData = {
		nameValid,
		emailValid
	}

	localStorage.setItem("loginData", JSON.stringify(loginData) )

});