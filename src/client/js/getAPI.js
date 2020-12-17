async function postText (url="", data={}) {

    //const data = document.getElementById('name').value;

    const response = await fetch(`http://localhost:8080${url}`, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
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
