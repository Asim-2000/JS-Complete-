const getComments = async () => {
    
    const response = await fetch('demo.json')
    const data = await response.json();
    return data;

}

// const promise = getComments();

getComments().then((data) => {
    console.log(data)
}).catch((err) => {
    console.log('Error',err)
})