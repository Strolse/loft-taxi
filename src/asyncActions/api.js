export const serverLogin = (email, password) => {
    return fetch('https://loft-taxi.glitch.me/auth', { 
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    .then(response=>{
        
        return response.json()            
    })
    .then(data=>{ 
        console.log(data, "response")
        return data;
    })};

    export const serverSendCard = (cardNumber, expiryDate, cardName, cvc, token) => {
        return fetch('https://loft-taxi.glitch.me/card', { 
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                cardNumber: cardNumber,
                expiryDate: expiryDate,
                cardName: cardName,
                cvc: cvc,
                token: token
            })
        })
        .then(response=>{
            
            return response.json()            
        })
        .then(data=>{ 
            console.log(data.success, "response2")
            return data.success;
        })}