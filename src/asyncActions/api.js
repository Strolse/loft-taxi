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
        const response = await fetch('https://loft-taxi.glitch.me/card', {
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

export const serverGetCard = async (token) => {
    try {
        const response = await fetch(`https://loft-taxi.glitch.me/card?token=${token}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        const json = await response.json();
        return json;

    } catch (error) {
        console.log(error);
    }
}

export const serverAddressList = async () => {
    try {
        const response = await fetch('https://loft-taxi.glitch.me/addressList', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        const json = await response.json();
        return json.addresses;

    } catch (error) {
        console.log(error);
    }
}

export const serverRoute = async (from, to) => {
    try {
        const response = await fetch(`https://loft-taxi.glitch.me/route?address1=${from}&address2=${to}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        const json = await response.json();
        return json;

    } catch (error) {
        console.log(error);
    }
}

export const serverRegister = async (email, password, name, surname) => {
    try {
        const response = await fetch('https://loft-taxi.glitch.me/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                password: password,
                name: name,
                surname: surname
            })
        })
        const json = await response.json();
        console.log(json, 'reg')
        return json;
    }
    catch (error) {
        console.log(error);
    }

};


export const drawRoute = (map, coordinates) => {
    map.flyTo({
        center: coordinates[0],
        zoom: 15
    });

    map.addLayer({
        id: "route",
        type: "line",
        source: {
            type: "geojson",
            data: {
                type: "Feature",
                properties: {},
                geometry: {
                    type: "LineString",
                    coordinates
                }
            }
        },
        layout: {
            "line-join": "round",
            "line-cap": "round"
        },
        paint: {
            "line-color": "#ffc617",
            "line-width": 8
        }
    });
};
