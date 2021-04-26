const axios = require('axios')
const showResponse = require('./showResponse')


let getData = async (url, param) => {
    try{
        // axios({
//     method: 'get',
//     url: 'https://jsonplaceholder.typicode.com/posts',
//     params: {
//         _limit: 5,
//     }
// })
        let data = await axios.get(url + "?" + param); //returnerar ett Promise
        showResponse(data);
    } catch {
        console.log("Error!")
    }
}

module.exports = getData