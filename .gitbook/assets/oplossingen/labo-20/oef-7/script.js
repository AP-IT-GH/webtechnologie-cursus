function getBartHomework() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Math homework");
        }, 1000);
    });
}

function finishHomework(homework) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Bart finished: ${homework}`);
        }, 1000);
    });
}

// Chaining
getBartHomework()
    .then((homework) => {
        return finishHomework(homework);
    })
    .then((result) => {
        console.log(result); // "Bart finished: Math homework"
    })
    .catch((err) => {
        console.log(err);
    });
