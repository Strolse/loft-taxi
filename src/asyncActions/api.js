export const serverLogin = async (email, password) => {
    try {
        const response = await fetch('https://loft-taxi.glitch.me/auth', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        const json = await response.json();
        return json;
    }
    catch (error) {
        console.log(error);
    }

};

export const serverSendCard = async (cardNumber, expiryDate, cardName, cvc, token) => {
    try {
        const response = await  fetch('https://loft-taxi.glitch.me/card', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                cardNumber: cardNumber,
                expiryDate: expiryDate,
                cardName: cardName,
                cvc: cvc,
                token: token
            })
        })
        const json = await response.json();
        return json.success;

    } catch (error) {
        console.log(error);
    }
}

export const serverAddressList = async()=>{
    try {
        const response = await fetch('https://loft-taxi.glitch.me/addressList', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        const json = await response.json();
        console.log(json.addresses)
        return json.addresses;

    } catch (error) {
        console.log(error);
    }
}

export const serverRoute = async(from, to)=>{
    try {
        const response = await fetch(`https://loft-taxi.glitch.me/route?address1=${from}&address2=${to}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        const json = await response.json();
        console.log(json, 'first')
        return json;

    } catch (error) {
        console.log(error);
    }
}

