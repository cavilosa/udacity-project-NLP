export async function handleSubmit(event) {
    event.preventDefault()

    let text = document.getElementById('name').value

    let regex = new RegExp(/\S/);

    console.log("::: Form Submitted :::");

    if (regex.test(text)) {
        Client.postText("http://localhost:8081/text", text)
        .then( Client.updateUI() );
    } else {
        alert("Fill in the valid input, please!");
    }
}
