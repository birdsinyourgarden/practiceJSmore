const personHandler = {
    set(obj, prop, value) {
        if (prop === 'edad' && (typeof value !== 'number' || value <= 0)) {
            throw new Error('La edad debe ser mayor que 0.');
        }
        if (prop === 'nombre' && (!value || typeof value !== 'string')) {
            throw new Error('El nombre no puede estar vacío y tiene que ser una cadena.');
        }
        obj[prop] = value;
        return true;
    }
};

const persona = new Proxy({}, personHandler);

persona.nombre = 'Juan'; 
persona.edad = 25;       
persona.edad = -5;
console.log(persona);