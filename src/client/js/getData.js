async function getData(url) {
    console.log("url", url);
    const response = await fetch(url);
    if (response.status > 300) {
        window.alert("response status is > 300");
    }
    try {
        const data = await response.json();
        console.log("data", data);
        return data;
    }catch (error) {
        console.log("error", error);
    }
}

export { getData }


async function updateUI (url) {
    console.log("update running")
    const request = await fetch (url);
    try {
        const data = await request.json();
        document.querySelector(".irony"). innerText += data.irony;
        document.querySelector(".subjectivity"). innerText += data.subjectivity;
        document.querySelector(".agreement"). innerText += data.agreement;
    } catch (error) {
        console.log("error", error)
    }
}
export { updateUI }
