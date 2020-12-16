async function getAPI (url) {
    const response = await fetch(`${url}`);

    if (response.status != 200) {
        console.log(response.status)
    }
    try {
        //console.log(response);
        const apiKey = response.json();
        return apiKey;
    }catch(error) {
        console.log("error", error);
    }
}

export { getAPI }
