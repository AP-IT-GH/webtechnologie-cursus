# logische Operatoren

Er zijn vier logische operatoren in JavaScript: `||` (OR), `&&` (AND), `!` (NOT) en `??` (nullish coalescing). We zullen in dit onderdeel enkel de eerste drie behandelen.

### OR (||)

```js
let a = true;
let b = false;
let result = a || b; // true
```

In de meeste programmeertalen werkt de OR-operator enkel op het boolean datatype. Als een van de kanten `true` zijn dan geeft het `true` terug en anders is het `false`. In JavaScript kan je ook deze operatoren gebruiken op andere datatypes (zoals bij strings) maar hier gaan we momenteel nog niet dieper op ingaan.

Er zijn vier mogelijke combinaties:

```js
console.log(true || true);   // true
console.log(false || true);  // true 
console.log(true || false);  // true
console.log(false || false); // false
```

Zoals je kan zien is het resultaat altijd `true` buiten als beide operanden `false` zijn.

Net zoals alle operatoren kan je deze ook gebruiken met variabelen:

```js
let isLightOn = true;
let isUserAtHome = false;

let isHouseSafe = isLightOn || isUserAtHome;
```

Of je kan werken in combinatie met vergelijkingsoperatoren

```js
let hour = 9;

let isSchoolClosed = (hour < 10 || hour > 18);
```

en zelfs met meerdere condities achter elkaar

```js
let hour = 12;
let isWeekend = true;

let isSchoolClosed = (hour < 10 || hour > 18 || isWeekend);
```

### AND (&&)

De AND (of EN) operator wordt voorgesteld door twee ampersands (`&&`)

Hier zijn vier combinaties mogelijk:

```js
console.log(true && true);   // true
console.log(false && true);  // false
console.log(true && false);  // false
console.log(false && false); // false
```

Je ziet hier dus dat AND enkel `true` teruggeeft als beide operanden `true` zijn. Anders is het resultaat `false`.

```js
let hour = 16;

let isSchoolOpen = (hour > 10 && hour < 18);
```

en er kunnen er ook weer meer dan 1 achter elkaar komen

```js
let hour = 16;
let weekday = 0; // 0 is Monday

let isSchoolOpen = (hour > 10 && hour < 18 && weekday >= 0 && weekday < 5); 
```

of zelfs gecombineerd worden met de OR operator

```js
let hour = 12;
let weekday = 0; // 0 is Monday

let isBellRinging = (hour == 16 && (weekday >= 0 && weekday < 4)) || 
(hour == 15 && (weekday == 4));

```

### NOT (!)

De NOT operator wordt voorgesteld met een uitroepingsteken `!`

De syntax is heel eenvoudig:

```js
let result = !value;
```

De not operator geeft `true` terug als de operand `false` is en `false` als de operand `true` is

```js
console.log(!true); // false
```

Een voorbeeld van de NOT-operator:

```js
let hour = 16;
let weekday = 0; // 0 is Monday

let isSchoolClosed = !(hour > 10 && hour < 18 && weekday >= 0 && weekday < 5); 
```
