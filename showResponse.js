function showResponse(res){
    console.log("Response data: ", res.data);
    console.log("Response headers: ", res.headers);
    console.log("Response config: ", res.config);
}

module.exports = showResponse