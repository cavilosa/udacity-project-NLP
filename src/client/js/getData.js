async function updateUI (url) {
    const request = await fetch (url); // Retreiving server side data form API call
    try {
        const data = await request.json();

        if (data.length != 0) { // Conat data contains all info from MeaningCloud
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
