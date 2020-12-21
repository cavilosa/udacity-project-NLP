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
    .then( async function (url) {
        const request = await fetch (url);
        try {
                const data = await request.json();
                console.log("data", data);
                document.querySelector(".irony"). innerText = data.irony;
                document.querySelector(".subjectivity"). innerText = data.subjectivity;
                document.querySelector(".agreement"). innerText = data.agreement;
        } catch (error) {
                console.log("error", error)
        }
    });
}

export { postText }
