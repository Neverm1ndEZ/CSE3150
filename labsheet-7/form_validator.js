function formValidator() {
	var firstname = document.getElementById("firstname");
	var lastname = document.getElementById("lastname");
	var email = document.getElementById("email");
	var pass = document.getElementById("pass");
	var addr = document.getElementById("addr");
	var mobileno = document.getElementById("mobileno");

	if (notEmpty(firstname, "First name cannot be empty")) {
		if (
			isAlphabet(firstname, "Please enter only letters for your First name")
		) {
			if (lengthRestriction(firstname, 6)) {
				if (
					isAlphabet(lastname, "Please enter only letters for your Last name")
				) {
					if (emailValidator(email, "Please enter a valid email address")) {
						if (lengthRestriction(pass, 6)) {
							if (
								isAlphanumeric(
									pass,
									"Please enter numbers and letters only for password",
								)
							) {
								if (notEmpty(addr, "Please enter the address")) {
									if (
										isNumeric(mobileno, "Please enter a valid mobile number")
									) {
										if (lengthRestriction1(mobileno, 10, 10)) {
											return true;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	return false;
}

function notEmpty(elem, helperMsg) {
	if (elem.value.length == 0) {
		alert(helperMsg);
		elem.focus();
		return false;
	}
	return true;
}

function isNumeric(elem, helperMsg) {
	var numericExpression = /^[0-9]+$/;
	if (elem.value.match(numericExpression)) {
		return true;
	} else {
		alert(helperMsg);
		elem.focus();
		return false;
	}
}

function isAlphabet(elem, helperMsg) {
	var alphaExp = /^[a-zA-Z]+$/;
	if (elem.value.match(alphaExp)) {
		return true;
	} else {
		alert(helperMsg);
		elem.focus();
		return false;
	}
}

function isAlphanumeric(elem, helperMsg) {
	var alphaExp = /^[0-9a-zA-Z]+$/;
	if (elem.value.match(alphaExp)) {
		return true;
	} else {
		alert(helperMsg);
		elem.focus();
		return false;
	}
}

function lengthRestriction(elem, min) {
	var uInput = elem.value;
	if (uInput.length >= min) {
		return true;
	} else {
		alert("Please enter minimum " + min + " characters");
		elem.focus();
		return false;
	}
}

function emailValidator(elem, helperMsg) {
	var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	if (elem.value.match(emailExp)) {
		return true;
	} else {
		alert(helperMsg);
		elem.focus();
		return false;
	}
}

function lengthRestriction1(elem, min, max) {
	var uInput = elem.value;
	if (uInput.length >= min && uInput.length <= max) {
		return true;
	} else {
		alert("Please enter 10 numbers only");
		elem.focus();
		return false;
	}
}
