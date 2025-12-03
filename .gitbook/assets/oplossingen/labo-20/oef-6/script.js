function checkDonutStock(donutCount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (donutCount >= 5) {
                resolve("Enough donuts for Homer!");
            } else {
                reject("Oh no! Not enough donuts!");
            }
        }, 2000);
    });
}

// Voorbeeld: we roepen de functie aan met een aantal donuts
checkDonutStock(7)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });
