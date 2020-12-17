async function postText (url, data) {
    const response = await fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })/*
    try {
        console.log("second stage")
        const newData = await response.json();
        console.log("newData");
        return newData;
    } catch(error) {
        console.log("error", error);
    }*/
}


/*async (url, data) => {

};*/

export { postText }
