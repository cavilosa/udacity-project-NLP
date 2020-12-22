export async function handleSubmit(event) {
    event.preventDefault()

    let text = document.getElementById('name').value

    console.log("::: Form Submitted :::");

    if (document.getElementById('name').value != "") {
        Client.postText("http://localhost:8081/text", text)
        .then( Client.updateUI() );
    } else {
        alert("Fill in the form, please");
    }
}
