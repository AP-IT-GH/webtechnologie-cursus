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

// Async/await versie
async function processOrder() {
    try {
        const order = await getKrustyBurgerOrder();
        const prepared = await prepareOrder(order);
        const delivered = await deliverOrder(prepared);
        console.log(delivered);
    } catch (err) {
        console.error("Error:", err);
    }
}

processOrder();
