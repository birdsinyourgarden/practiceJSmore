function parseJSON(jsonString) {
    try {
        const parsed = JSON.parse(jsonString);
        return parsed;
    } catch (error) {
        console.error("JSON inválido:", error.message);
        return null;
    }
}

const jsonString = '{"name": "Juan"}';
const result = parseJSON(jsonString);
console.log(result);