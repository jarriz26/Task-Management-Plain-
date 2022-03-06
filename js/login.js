
/**
 * @param {HTMLInputElement} input
 */
function checkUserIdInput(input) {
    let submitButton = document.querySelector("#login_form>input[type=submit]")
    let isValid = validateUserId(input.value)
    submitButton.disabled = !isValid
    
    errorMessage(input, "Invalid User ID", !isValid)
}