export function handleSubmit(event) {
    event.preventDefault()

    let formText = document.getElementById('name').value

    console.log("::: Form Submitted :::")

    getAPI('http://localhost:8000/test')
    .then ( (apiKey) => {
        getURL(apiKey)
        .then( (url) => {
                getData(url)
                .then( (data) => {
                    const results = `The irony of the text: ${data.irony}.
                    The subjectivity of the text: ${data.subjectivity}.
                    The agreement between the sentiments detected in the text,
                    the sentence or the segment it refers to: ${data.agreement}.`
                    document.querySelector("#results").innerText = results;
                })
        } )
    })

}


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

const getAPI = async (url) => {
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

const getURL = async (apiKey) => {
    console.log(apiKey);
    const text = document.getElementById('name').value;
    if (text === "") {
        alert("Fill in the text field");
    }
    const url = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&of=json&txt=${text}&lang=en`;
    console.log("url", url);
    return url;
}
