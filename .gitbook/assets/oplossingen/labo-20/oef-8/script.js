// Functie 1: bestelling ophalen
function getKrustyBurgerOrder() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const order = "Krusty Burger with extra cheese";
            console.log("Order received:", order);
            resolve(order);
        }, 1000);
    });
}

// Functie 2: bestelling bereiden
function prepareOrder(order) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const prepared = `Prepared: ${order}`;
            console.log("Order prepared.");
            resolve(prepared);
        }, 1500);
    });
}

// Functie 3: bestelling leveren
function deliverOrder(preparedOrder) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const delivered = `Delivered: ${preparedOrder}`;
            console.log("Order delivered.");
            resolve(delivered);
        }, 1000);
    });
}

// Promise chain
getKrustyBurgerOrder()
    .then((order) => {
        return prepareOrder(order);
    })
    .then((prepared) => {
        return deliverOrder(prepared);
    })
    .then((delivered) => {
        console.log(delivered);
    })
    .catch((err) => {
        console.error("Error:", err);
    });
