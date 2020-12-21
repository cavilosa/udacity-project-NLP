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
    //res.send(projectData).then (Client.updateUI("http://localhost:8081/data"));
}

export { postText }
