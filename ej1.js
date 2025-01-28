function fetchData(url) {
    return fetch(url).then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error. Status:${response.status}`)
        }
        return response.json();
    })
    .catch(error => {
        console.error("Error feching data:", error.message);
        throw error;
    });
}

fetchData('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log(data))
    .catch(error => console.log("Solicitud fallida:", error.message));