const token = 'rnSCFERG6CBrtCY9kuBI'

async function request( url='https://the-one-api.dev/v2/character', options ={} ) {
    
    const response = await fetch (url,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        } 
    }).then(response => {
        if(response.ok === true) {
            console.log("response.ok");
            return response.json()
        }
        if(response.ok === false) {
            console.log("response.bad"); 
            throw new Error('Запрос не удался')
        }
    })
    return response    

}

export default request

