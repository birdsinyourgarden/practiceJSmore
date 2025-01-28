const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        const posts = response.data;
        console.log("Primer post:", posts[0].title);
    })
    .catch(error => {
        console.error("Error en la solicitud:", error.message);
});

// otra forma 
/* const axios = require('axios');

axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/posts',
    params:{
        id: 1
    }
}).then(function(response){
    console.log(response.data);
})*/ 