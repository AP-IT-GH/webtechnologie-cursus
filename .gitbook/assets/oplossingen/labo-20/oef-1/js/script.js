'use strict'

// Vraag toestemming zodra de pagina geladen is
Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
        new Notification('Hello world')
    } else {
        console.log('Toestemming geweigerd')
    }
})
