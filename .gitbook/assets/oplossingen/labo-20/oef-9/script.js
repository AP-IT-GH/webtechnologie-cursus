function getLisaBook() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Lisa's book");
        }, 1200);
    });
}

function getMaggieBottle() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Maggie's bottle");
        }, 500);
    });
}

function getMargeGroceries() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Marge's groceries");
        }, 1800);
    });
}

// Alles tegelijk starten, wachten tot alles klaar is
Promise.all([getLisaBook(), getMaggieBottle(), getMargeGroceries()])
    .then((results) => {
        console.log(results);
        // ["Lisa's book", "Maggie's bottle", "Marge's groceries"]
    })
    .catch((err) => {
        console.error(err);
    });
