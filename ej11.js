async function enviarDatos() {
    const data = { nombre: "Marta", edad: 37 };

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        const resultado = await response.json();
        console.log(resultado);
    } catch (error) {
        console.error('Error', error.message);
    }
}

enviarDatos();
