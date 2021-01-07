export async function handleSubmit(event) {
    event.preventDefault()
    // user input
    let text = document.getElementById('name').value
    // to check if the input spaces and tabs only
    let regex = new RegExp(/\S/);

    console.log("::: Form Submitted :::");

    if (regex.test(text)) {
        text = encodeURIComponent(text);
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
    const request = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({input:data})
    })
    try {
        const data = await request.json();
        return data
    }catch(error){
        console.log(error)
    }
}

export { postText }
