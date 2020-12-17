async function getAPI (url) {

    const request = await fetch(`${url}`)

    if (request.status != 200) {
        console.log(response.status)
    }
    try {
        const apiKey = request.json()
        console.log(apiKey)
        return apiKey;
    } catch(error) {
        console.log("error", error);
    }
}

export { getAPI }
