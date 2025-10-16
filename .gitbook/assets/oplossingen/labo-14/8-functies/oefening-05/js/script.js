const result = document.getElementById("result");

function sum(array) {
    console.log(array);

    let sum = 0;
    for (let i=0; i < array.length; i++) {
        sum  += array[i];
    }

    return sum;
}

result.textContent = `de som van de array is: ${sum([1, 2, 4, 5])}.`;