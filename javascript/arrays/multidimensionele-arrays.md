# multidimensionele arrays

Je hebt al gezien dat arrays eender welk type van waarde kunnen bevatten. Als dat waar is dan kunnen we ook arrays in arrays opslagen? Dat kunnen we!

Dit concept noemen we een multi-dimensionele array.

```js
let starterPokemon = [
    ["Bulbasaur","Charmander","Squirtle"],
    ["Chikorita","Cyndaquil","Totodile"],
    ["Treecko","Torchic","Mudkip"]
];
```

Je ziet hierboven dat elk element van de `startPokemon`array zelf ook een array bevat. Je kan dit zien als een soort tabel:

| Index | 0         | 1          | 2        |
| ----- | --------- | ---------- | -------- |
| 0     | Bulbasaur | Charmander | Squirtle |
| 1     | Chikorita | Cyndaquil  | Totodile |
| 2     | Treecko   | Torchic    | Mudkip   |

Elementen opvragen gebeurt met een dubbele vierkante haakjes notatie:

```js
console.log(starterPokemon[1][2]) // Totodile
console.log(starterPokemon[2][2]) // Mudkip
...
```

Er is in principe geen limiet hoeveel arrays je in arrays kan steken. Maar het is zeer zeldzaam om ooit arrays te gebruiken met meer dan 2 dimensies.

Je kan ook een `for` loop gebruiken om door alle elementen te gaan van een 2 dimensionele array:

```js
for (let i=0; i<starterPokemon.length; i++) {
    console.log(`Generation ${i+1}:`);
    for (let j=0; j<starterPokemon[i].length; j++) {
        console.log(starterPokemon[i][j])
    }
}
```

We gebruiken hiervoor twee lussen die in elkaar zitten. De index van de buitenste lus verwijst naar de rijen van de "tabel" en de binnenste loop verwijst naar de kolommen.
