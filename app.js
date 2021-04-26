const axios = require('axios')
const showResponse = require('./showResponse')
const getData = require('./getData')
//CRUD - Create, Read, Update, Delete

const URL = 'https://jsonplaceholder.typicode.com/posts'

getData(URL, '_limit=5');

axios.post(URL,{
     userId:1337,
     title:"Hej jag är en titel",
     body:"Lorem ipsum och sånt..!"})
     .then(res => showResponse(res))
     .catch(err => console.log(err))

     //Ändra en property
axios.patch('https://jsonplaceholder.typicode.com/posts/1',{
    title:"Whoopty-doo",
}).then(res => showResponse(res))
.catch(err => console.log(err))

    //Ersätter all information med vårt objekt
axios.put('https://jsonplaceholder.typicode.com/posts/1',{
    title:"Whoopty-doo",
}).then(res => showResponse(res))
.catch(err => console.log(err))

    //Tar bort all information från endpoint
axios.delete('https://jsonplaceholder.typicode.com/posts/1')
.then(res => showResponse(res))
.catch(err => console.log(err))