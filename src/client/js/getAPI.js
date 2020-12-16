async function getAPI (url) {
    console.log(url);

    const response = await fetch(`${url}`,{
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
       method: "GET"
    })
    console.log(response);
    if (response.status != 200) {
        console.log(response.status)
    }
    try {
        const apiKey = response.json()
        console.log(apiKey)
        return apiKey;
    } catch(error) {
        console.log("error", error);
    }
}

export { getAPI }
