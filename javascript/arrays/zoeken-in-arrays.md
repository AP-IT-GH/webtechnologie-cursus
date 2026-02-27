# zoeken in arrays

Er zijn een aantal methoden die je kan gebruiken om na te gaan of een element in een array zit en waar deze zich bevindt. Er zijn er twee interessante:

* `arr.indexOf(element)` - Zoekt naar de positie in de array waar het element zich bevindt. Het geeft de index terug van het element of -1 als het niet gevonden is
* `arr.includes(element)` - Geeft `true` terug als het element zich bevind in de array. `false` als het er niet inzit

Bijvoorbeeld:

```js
let fruits = ["Banana","Apple","Orange"];

console.log(fruits.indexOf("Apple")); // 1
console.log(fruits.indexOf("Kiwi")); // -1

console.log(fruits.includes("Banana")) // true
```

Er zijn nog meer ingewikkelde manieren om te zoeken in arrays, maar deze gaan we momenteel niet behandelen.
