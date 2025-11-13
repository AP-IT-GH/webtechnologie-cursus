"use strict";

let text =
  "De winnende lottonummers van deze week: 05,09,13,18,27,44. Proficiat aan alle deelnemers.";

let lottoNumbers = text.substring(40, 57);
let formattedLottoNumbers = lottoNumbers.replaceAll(",", "|");

console.log(formattedLottoNumbers);

// Je kunt de lottonummers ook opsplitsen in een array op basis van de komma en die vervolgens terug
// samenvoegen met een pipe-symbool er tussen (zie hoofdstuk Arrays)
// console.log(lottoNumbers.split(',').join('|'));
