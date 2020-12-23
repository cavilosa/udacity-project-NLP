export async function handleSubmit(event) {
    event.preventDefault()
    // user input
    let text = document.getElementById('name').value
    // to check if the input spaces and tabs only
    let regex = new RegExp(/\S/);

    console.log("::: Form Submitted :::");

    if (regex.test(text)) {
        // Sending input tp server
        Client.postText("http://localhost:8081/text", text)
        // Updating UI with data received from the API call
        .then( Client.updateUI("http://localhost:8081/data") );

    } else {
        alert("Fill in the valid input, please!");
    }
}

// Posting user input to server side code
async function postText (url, data) {
    console.log("post text is ran")
    const response = await fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(data)
    })
    console.log("post text end")
}

export { postText }
