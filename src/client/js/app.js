export function handleSubmit(event) {
    event.preventDefault()

    let formText = document.getElementById('name').value

    console.log("::: Form Submitted :::")

    Client.getAPI("http://localhost:8000/test")
    .then ( (apiKey) => {
        Client.getURL(apiKey)
        .then(  (url) => {
            Client.getData(url)
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

/*
export async function getData(url) {
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


async function getAPI (url) {
    console.log(url);
    const response = await fetch(url);
    if (response.status > 300) {
        console.log(response.status)
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


export async function getURL(apiKey) {
    console.log(apiKey);
    const text = document.getElementById('name').value;
    if (text === "") {
        alert("Fill in the text field");
    }
    const url = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&of=json&txt=${text}&lang=en`;
    console.log("url", url);
    return url;
}*/
