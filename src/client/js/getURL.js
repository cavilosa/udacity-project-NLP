async function getURL() {

    const text = document.getElementById('name').value;
    console.log(text)

    if (text === "") {
        alert("Fill in the text field");
    }

    const response = await fetch("/")

    if (response.ok) {
        return response.json();
    }
}

export { getURL }
