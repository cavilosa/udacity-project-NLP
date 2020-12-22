export async function handleSubmit(event) {
    event.preventDefault()

    let text = document.getElementById('name').value

    let regex = new RegExp(/\S/);

    console.log("::: Form Submitted :::");

    if (regex.test(text)) {
        postText("http://localhost:8081/text", text)
        .then( Client.updateUI() );
    } else {
        alert("Fill in the valid input, please!");
    }
}

async function postText (url, data) {
    console.log("post text is ran")
    const response = await fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "text/plain"
        },
        body: JSON.stringify(data)
    })
}


export { postText }
