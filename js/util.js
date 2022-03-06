/**
 * @param {string} input
 * @return {boolean} check if the input is valid user id
 */
function validateUserId(input) {
    let matches =  input.match(/^[0-9]{2}-[0-9]{5}$/g)

    if (matches == null) {
        return false
    }

    return matches.length == 1
}

/**
 * @param {HTMLInputElement} input
 * @param {String} message
 * @param {boolean} display
 */
function errorMessage(input, message, display) {
    let errorMsg = input.nextSibling;

    if (errorMsg.className != "error_message") {
        errorMsg = null
    }

    if(display) {
        if(errorMsg == null) {
            // Create error message element 
            let errorMsg = document.createElement("div")
            errorMsg.textContent = message
            errorMsg.className = "error_message";

            let parent = input.parentNode
            let nextElement = input.nextSibling

            parent.insertBefore(errorMsg, nextElement);
        }
    }
    else {
        errorMsg?.remove()
    }
}