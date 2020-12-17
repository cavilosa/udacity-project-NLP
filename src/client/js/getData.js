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
