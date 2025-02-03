function hervirAgua() {
    return new Promise(resolve => setTimeout(() => resolve("Agua hervida"), 4000))
}

function molerCafe() {
    return new Promise(resolve => setTimeout(() => resolve("Café molido"), 3000));
}

function hacerCafe() {
    return new Promise(resolve => setTimeout(() => resolve("Café listo"), 4500));
}

hervirAgua()
    .then(result => {
        console.log(result); 
        return molerCafe();
    })
    .then(result => {
        console.log(result); 
        return hacerCafe();
    })
    .then(result => console.log(result)) 
    .catch(error => console.error("Error preparando el café:", error));

// otra opción 

/* function hervirAgua(){
    return new Promise(resolve =>
        setTimeout(resolve, 2000)
    )
}

function molerCafe(){
    return new Promise(resolve =>
        setTimeout(resolve, 1000)
    )
}

function hacerCafe(){
    return new Promise(resolve =>
        setTimeout(resolve, 3000)
    )
}

async function prepararCafe() {
    try {
        const agua = await hervirAgua();
        console.log("hirviendo agua"); 

        const cafeMolido = await molerCafe();
        console.log("café molido"); 

        const cafe = await hacerCafe();
        console.log("cafe hecho"); 
    } catch (error) {
        console.error("Error preparando el café:", error);
    }
}

prepararCafe();*/