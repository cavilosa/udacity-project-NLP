async function getAPI (url) {
   console.log(url)

    const response = await fetch(url)
    if (response.status != 200) {
        console.log(response.status)
    }
    try {
        const apiKey = await response.json();
        console.log(apiKey)
        return apiKey;
    } catch(error) {
        console.log("error", error);
    }
}

export { getAPI }
