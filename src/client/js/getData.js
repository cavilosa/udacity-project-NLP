async function updateUI (url) {
    console.log("update UI is running")
    const request = await fetch (url);
    if (request.ok) {
        console.log()
        try {
            const data = await request.json();
            console.log("data", data);
            document.querySelector(".irony"). innerText = data.irony;
            document.querySelector(".subjectivity"). innerText = data.subjectivity;
            document.querySelector(".agreement"). innerText = data.agreement;
        } catch (error) {
            console.log("error", error)
        }
    }

}
export { updateUI }
