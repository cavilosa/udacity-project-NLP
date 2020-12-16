async function getAPI (url) {
    console.log(url);
    const response = await fetch(url);
    if (response.status > 300) {
        console.log(response.status, response.body)
    }
    try {
        const apiKey = response.json();
        console.log("apikey:", apiKey);
        return apiKey.json();
        //getURL(apiKey);
    }catch(error) {
        console.log("error", error);
    }
}

export { getAPI }
