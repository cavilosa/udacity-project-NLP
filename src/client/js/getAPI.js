async function getAPI (url) {

    const request = await fetch(`${url}`)

    if (request.status != 200) {
        console.log(request.status)
    }
    try {
        const apiKey = await request.json()
        console.log(apiKey)
        return apiKey;
    } catch(error) {
        console.log("error", error);
    }
}

export { getAPI }
