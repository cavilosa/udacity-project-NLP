export function handleSubmit(event) {
    event.preventDefault()

    console.log("::: Form Submitted :::")

    if (document.getElementById('name').value != "") {

    Client.postText()
        /*
        Client.getAPI("/")
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
        })*/
    } else {
        alert("Fill in the form, please");
    }


}

export async function postText(url="", data = {}) {
    let formText = document.getElementById('name').value;
    const response = await fetch("http:localhost:8080/geturl", {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringufy(data)
    });

    try {
        const text = await response.json();
        console.log("text done");
        return text;
    } catch (error) {
        console.log("error", error);
    }
};


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
