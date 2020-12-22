async function updateUI (url) {
    console.log("update UI is running")
    const request = await fetch (url);
    try {
        const data = await request.json();
        console.log(data)
        if (data.length != 0) {
                document.querySelector(".irony"). innerText = data.irony;
                document.querySelector(".subjectivity"). innerText = data.subjectivity;
                document.querySelector(".agreement"). innerText = data.agreement;
        } else {
                console.log("data.length === 0")
        }
    } catch (error) {
            console.log("error", error)
    }
}
export { updateUI }
