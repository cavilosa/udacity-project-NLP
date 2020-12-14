
//document.addEventListener("click", handleSubmit);

function handleSubmit(event) {
    event.preventDefault()

    let formText = document.getElementById('name').value

    console.log("::: Form Submitted :::")

    getAPI('http://localhost:8000/test')
    /*.then ( (url) => {
        getData(url);
    })*/

}

const getData = async (url) => {
    const response = await fetch(url);
    if (response.status > 300) {
        window.alert("response status is > 300");
    }
    try {
        const data = await response.json();
        return data;
    }catch (error) {
        console.log("error", error);
    }
}


const getAPI = async (url) => {
    console.log(url);
    const response = await fetch(url);
    if (response.status > 300) {
        console.log("res status > 300, problem")
    }
    try {
        const apiKey = response.json();
        console.log("key", apiKey);
        return apiKey;
        //getURL(apiKey);
    }catch(error) {
        console.log("error", error);
    }
}

const getURL = async (apiKey) => {
    const text = document.getElementById('name').value;
    if (text === "") {
        alert("Fill in the text field");
    }
    const url = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&of=json&txt=${text}&lang=en`;
    console.log("url", url);
    return url;
}
