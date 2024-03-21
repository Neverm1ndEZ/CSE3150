function formValidator() {
	const fields = [
		{
			elem: document.getElementById("firstname"),
			msg: "First name cannot be empty",
		},
		{
			elem: document.getElementById("lastname"),
			msg: "Please enter only letters for your Last name",
		},
		{
			elem: document.getElementById("email"),
			msg: "Please enter a valid email address",
		},
		{
			elem: document.getElementById("pass"),
			msg: "Please enter numbers and letters only for password",
		},
		{ elem: document.getElementById("addr"), msg: "Please enter the address" },
		{
			elem: document.getElementById("mobileno"),
			msg: "Please enter a valid mobile number",
		},
	];

	for (const { elem, msg } of fields) {
		if (!notEmpty(elem, msg)) return false;
	}

	if (
		!isAlphabet(
			fields[0].elem,
			"Please enter only letters for your First name",
		) ||
		!lengthRestriction(fields[0].elem, 6) ||
		!isAlphabet(
			fields[1].elem,
			"Please enter only letters for your Last name",
		) ||
		!lengthRestriction(fields[3].elem, 6) ||
		!isNumeric(fields[5].elem, "Please enter 10 numbers only") ||
		!lengthRestriction1(fields[5].elem, 10, 10)
	) {
		return false;
	}

	return true;
}
