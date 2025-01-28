async function getUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching user data:", error.message);
    }
}

getUserData();