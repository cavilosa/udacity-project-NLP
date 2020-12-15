export const getAPI = async (url) => {
    console.log(url);
    const response = await fetch(url);
    if (response.status > 300) {
        console.log("res status > 300, problem")
    }
    try {
        const apiKey = response.json();
        //console.log("key:", apiKey);
        return apiKey;
        //getURL(apiKey);
    }catch(error) {
        console.log("error", error);
    }
}

export { getAPI }
