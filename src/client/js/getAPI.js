async function postText (url, data) {
    console.log(url, data)
    const response = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    try {
        console.log("second stage")
        const newData = await response.json();
        console.log("newData");
        return newData;
    } catch(error) {
        console.log("error", error);
    }
};

export { postText }
