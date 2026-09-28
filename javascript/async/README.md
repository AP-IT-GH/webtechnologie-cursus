# Asynchroon programmeren

Tot nu toe voerde de browser je JavaScript **synchroon** uit: regel na regel, en elke regel wacht tot de vorige klaar is. Dat werkt zolang alles onmiddellijk beschikbaar is, maar het loopt vast zodra je gegevens nodig hebt die ergens anders vandaan komen. Een server aanspreken duurt immers even, en ondertussen mag je pagina niet blokkeren.

In dit deel leer je hoe je code schrijft die **op een resultaat wacht zonder de rest van de pagina te blokkeren**.

## Wat komt aan bod

* [**Promises**](promises/README.md): het object dat een toekomstig resultaat voorstelt, en de `async`/`await`-notatie om daar leesbaar mee te werken.
* [**HTTP request methoden**](http-methoden/README.md): hoe een browser en een server met elkaar praten, en wat het verschil is tussen een `GET` en een `POST`.
* [**API's**](apis/README.md): gegevens ophalen bij een externe dienst, die eerst uittesten met Postman, en ze daarna in je eigen pagina tonen.

Deze leerstof komt aan bod in [labo 20](../../labos/labo20.md) en [labo 21](../../labos/labo21.md).
