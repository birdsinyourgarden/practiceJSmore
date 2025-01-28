function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

delay(2000).then(() => console.log("Este mensaje aparece después de 2 segundos"));