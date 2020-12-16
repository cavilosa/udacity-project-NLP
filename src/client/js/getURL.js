async function getURL(apiKey) {
    console.log("api key function is running");
    const text = document.getElementById('name').value;
    if (text === "") {
        alert("Fill in the text field");
    }
    const url = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&of=json&txt=${text}&lang=en`;
    console.log("url", url);
    return url;
}

export { getURL }
