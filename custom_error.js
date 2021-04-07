const getComments = async () => {
    
    const response = await fetch('demo.json');

    if (response.status !== 200) {
        throw new Error('Cannot fetch the data')
        
    }
    const data = await response.json();
    return data;
}


getComments().
    then(data => console.log('Resolved', data)).
    catch(err => console.log('Rejected',err.message))