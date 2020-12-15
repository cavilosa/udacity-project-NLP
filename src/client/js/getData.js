
const getData = async (url) => {
    console.log("url", url);
    const response = await fetch(url);
    if (response.status > 300) {
        window.alert("response status is > 300");
    }
    try {
        const data = await response.json();
        console.log("data", data);
        return data;
    }catch (error) {
        console.log("error", error);
    }
}
