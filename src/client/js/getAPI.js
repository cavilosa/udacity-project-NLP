async function postText (url="", data={}) {


    const response = await fetch(`http://localhost:8080${url}`, {
        method: "POST",
        credentials: "same-origin",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    }catch(error) {
        console.log("error", error);
    }
}

export { postText }
